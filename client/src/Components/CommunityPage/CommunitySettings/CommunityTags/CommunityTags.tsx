import style from "../../CommunityPage.module.scss";
import s_style from "../CommunitySettings.module.scss";
import { CommunityTypeShort, ITag } from '../../../../Models/Activities';
import { useFieldArray, useFormContext } from "react-hook-form";
import TagForm from "./CommunityTagsForm";

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
            append({color:"grey", id:newTagId, name:""} as ITag);
        }
    }
    const handleDelete = (index:number) =>{
        if(tags.length!==1){
            remove(index);
        }
        else{
            remove(index);
            append({color:"grey", id:newTagId, name:""} as ITag);
        }
    }

    return(
        <div className={s_style.settings_left__settings_tags_container}>
            <h3 className={style.subtitle_min}>Теги</h3>
            <button className={s_style.add_button} onClick={handleAddTag}><span>＋</span><p>Добавить</p></button>
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
                <h3 className={style.subtitle_min}>Тег</h3>
                <div className={style.form__controls}><p onClick={handleTagDelete}>удалить</p></div>
            </div>
           <TagForm index={index} id={id} name={name} color={color} />
        </div>
    )
}

export default CommunityTags;