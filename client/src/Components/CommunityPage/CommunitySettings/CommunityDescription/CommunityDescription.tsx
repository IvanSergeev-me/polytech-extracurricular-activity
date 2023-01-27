import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CommunityTypeShort } from '../../../../Models/Activities';
import s_style from "../CommunitySettings.module.scss";
import Textarea from '../../../Common/Textarea/Textarea';

const CommunityDescription = () => {

    const { control, formState: { errors } } = useFormContext<CommunityTypeShort>();

    const errorMessage = errors.description?.type === "maxLength"? "Слишком много символов" : "";

    return (
        <div className={s_style.settings_right__settings_description_container}>
            <Controller
                name="description"
                control={control}
                rules={{ maxLength:256 }}
                render={ ({field: {value, onChange } }) =>
                    <Textarea 
                        value={value}
                        onChange={val=> onChange(val)}
                        placeholder={"Введите описание проекта"}
                        errorMessage={errorMessage}
                        title={"Описание проекта"} 
                        PopupChildren={<p>Описание проекта - это информация, которую увидят пользователи на странице "Информация о проекте"</p>}/>
            }/>
            <Controller
                name="description_short"
                control={control}
                rules={{ maxLength:100 }}
                render={ ({field: {value, onChange } }) =>
                    <Textarea 
                        onChange={val=> onChange(val)}
                        placeholder={"Введите краткое описание проекта"}
                        errorMessage={errorMessage}
                        value={value}
                        title={"Краткое описание проекта"} 
                        PopupChildren={<p>Краткое описание проекта - это информация, которую увидят пользователи в 
                            карточках на главной странице, при просмотре активностей</p>}/>
            }/>
        </div>
    )
}

export default CommunityDescription;