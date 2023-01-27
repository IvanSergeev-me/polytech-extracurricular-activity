import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CommunityTypeShort, ITag } from "../../../../Models/Activities";
import AppColorPicker from "../../../Common/ColorPicker/AppColorPicker";
import style from "../../CommunityPage.module.scss";
import s_style from "../CommunitySettings.module.scss";

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

export default TagForm;