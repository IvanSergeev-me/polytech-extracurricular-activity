import style from "../CommunityPage.module.css";
import s_style from "./CommunitySettings.module.css";
import { ITag } from '../../../Models/Activities';
import { Controller, useForm } from "react-hook-form";
import AppColorPicker from "../../Common/ColorPicker/AppColorPicker";

interface CommunityTagsProps {tags:ITag[]}

const CommunityTags = ({tags}:CommunityTagsProps) =>{

    return(
        <div className={s_style.settings_left__settings_tags_container}>
            <h3 className={style.subtitle}>Теги</h3>
            <div className={s_style.settings_tags_container__settings_tags}>
                {tags.map(t => <CommunityTag key={t.id} id={t.id} name={t.name} color={t.color}/>)}
                <CommunityTag id={tags[tags.length-1].id + 1} name={""} color={"grey"}/>
            </div>
        </div>
    )
}

const CommunityTag = ({id,name,color}:ITag) =>{

    const onFormSubmit = (data:ITag) =>{
        const newTag = {id:id, name:data.name, color:data.color} as ITag;
        console.log(newTag);
    }

    const handleDelete = () =>{
        console.log(id);
    }

    return(
        <div className={s_style.settings_tags__settings_tag_container}>
            <div className={s_style.settings_tag_container__heading}>
                <h3 className={style.subtitle}>Тег</h3>
                <div className={style.form__controls}><p onClick={handleDelete}>удалить</p></div>
            </div>
           <TagForm id={id} name={name} color={color} onFormSubmit={onFormSubmit}/>
        </div>
    )
}

type TagFormProps = ITag & {onFormSubmit:(data:ITag)=>void}

const TagForm = ({id,name,color, onFormSubmit}:TagFormProps) =>{

    //need to get from api
    const tagsColors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", 
    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", 
    "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", 
    "#ff9800", "#ff5722", "#795548", "#607d8b"]

    const { register, control, handleSubmit, formState: { errors, dirtyFields } } = useForm<ITag>();

    const onSubmit = (data:ITag) => onFormSubmit(data);

    return(
        <form className={s_style.settings_tag_container__form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form__field}>
                {(errors.name?.type === 'required') && <p className={style.field__error}>Это поле обязательно</p>}
                {(errors.name?.type === 'maxLength') && <p className={style.field__error}>Слишком много символов</p>}
                <div className={style.field__wrapped_input}>
                    <input placeholder="Введите тег..." type="text" defaultValue={name} {...register("name", { required: true, maxLength:16 })}/>
                    <Controller
                        name="color"
                        control={control}
                        render={({field: { onChange } }) => <AppColorPicker currentColor={color!} colors={tagsColors} onChange={(value)=>onChange(value.hex)}/>}
                        />
                </div>
                
            </div>
            {(dirtyFields.name || dirtyFields.color) && 
                <div className={style.form__controls}>
                    <button type="submit" className={style.submit__button}>Опубликовать</button>
                </div>}
        </form>
    )
}

export default CommunityTags;