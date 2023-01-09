import style from "../CommunityPage.module.css";
import s_style from "./CommunitySettings.module.css";
import { CommunityTypeShort, ITag } from '../../../Models/Activities';
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import AppColorPicker from "../../Common/ColorPicker/AppColorPicker";

const CommunityTags = () =>{

    const { control, getValues } = useFormContext<CommunityTypeShort>();

    //for test only
    const {tags} = getValues();
    const newTagId = tags.length>0?tags[tags.length-1].id + 1:1;

    const { fields, append, remove } = useFieldArray({
        control,
        name: "tags"
      });

    const handleAddTag = () =>{
        if(tags.every( t => t.name )){
            append({color:"grey", id:newTagId, name:""});
        }
    }
    const handleDelete = (index:number) =>{
        if(tags.length!==1){
            remove(index);
        }
        else{
            remove(index);
            append({color:"grey", id:newTagId, name:""});
        }
    }

    return(
        <div className={s_style.settings_left__settings_tags_container}>
            <h3 className={style.subtitle}>Теги</h3>
            <button onClick={handleAddTag}><span>+</span><p>Добавить</p></button>
            <div className={s_style.settings_tags_container__settings_tags}>
                {fields.map((t,index) => <CommunityTag
                    handleDelete={handleDelete} 
                    key={t.id} id={t.id} name={t.name} 
                    color={t.color} index={index} />)}
            </div>
        </div>
    )
}

type CommunityTagProps = ITag & {handleDelete:(index:number)=>void; index:number};

const CommunityTag = ({id,name,color, index, handleDelete}:CommunityTagProps) =>{

    const handleTagDelete = () =>{
        handleDelete(index);
    }

    return(
        <div className={s_style.settings_tags__settings_tag_container}>
            <div className={s_style.settings_tag_container__heading}>
                <h3 className={style.subtitle}>Тег</h3>
                <div className={style.form__controls}><p onClick={handleTagDelete}>удалить</p></div>
            </div>
           <TagForm index={index} id={id} name={name} color={color} />
        </div>
    )
}

type TagFormProps = ITag & {index:number};

const TagForm = ({ id,name,color, index }:TagFormProps) =>{

    //need to get from api
    const tagsColors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", 
    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", 
    "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", 
    "#ff9800", "#ff5722", "#795548", "#607d8b"]

    const { register, control, formState: { errors } } = useFormContext<CommunityTypeShort>();

    const existsCondition = errors.tags && errors.tags[index];

    return(
        <div className={s_style.settings_tag_container__form}>
            <div className={style.form__field}>
                {(existsCondition && errors.tags![index]!.name?.type === 'required') && <p className={style.field__error}>Это поле обязательно</p>}
                {(existsCondition && errors.tags![index]!.name?.type === 'maxLength') && <p className={style.field__error}>Слишком много символов</p>}
                <div className={style.field__wrapped_input}>
                    <input placeholder="Введите тег..." type="text" defaultValue={name} {...register(`tags.${index}.name`, { required: true, maxLength:16 })}/>
                    <Controller
                        name={`tags.${index}.name`}
                        control={control}
                        render={({field: { onChange } }) => <AppColorPicker currentColor={color!} colors={tagsColors} onChange={(value)=>onChange(value.hex)}/>}
                        />
                </div>
            </div>
        </div>
    )
}

export default CommunityTags;