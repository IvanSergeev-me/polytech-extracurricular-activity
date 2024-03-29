import React, { FC } from 'react';
import { useTypedSelector } from '../../../Hooks/useTypedSelector';
import { selectCommunityInfo } from '../../../Selectors';
import style from "../CommunityPage.module.scss";
import s_style from "./CommunitySettings.module.scss";
import CommunityImage from './CommunityImage/CommunityImage';
import CommunityTags from './CommunityTags/CommunityTags';
import CommunityPhotos from './CommunityPhotos/CommunityPhotos';
import { withCommunityRights } from '../../HOC/withCommunityRights';
import { useForm, FormProvider } from "react-hook-form";
import { CommunityTypeShort } from '../../../Models/Activities';
import CommunityDescription from './CommunityDescription/CommunityDescription';
import CommunityLinks from './CommunityContacts/CommunityLinks';
import CommunityContacts from './CommunityContacts/CommunityContacts';

const CommunitySettings:FC = () => {
    const {
        id,links,contacts,description,description_short,
        photos,image,tags,name,} = useTypedSelector(selectCommunityInfo);

    const methods = useForm<CommunityTypeShort>({defaultValues:{id,links,contacts,
        description, description_short,
        photos,image,tags,name}});
        
    const onSubmit = (data:CommunityTypeShort) =>{
        console.log(data);
        methods.reset();
    };

    return (
        <div className={s_style.main_content__settings_section}>
            <div className={s_style.settings_section__header}>
                <h2 className={style.title}>Настройки сообщества</h2>
                <h3 className={style.subtitle}>{name}</h3>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className={s_style.settings_section__settings_container}>
                    <div className={s_style.settings_container__settings_form_content}>
                        <div className={s_style.settings_form_content__settings_left}>
                            <CommunityImage />
                            <CommunityTags />
                            <CommunityPhotos />
                        </div>
                        <div className={s_style.settings_form_content__settings_right}>
                            <CommunityDescription />
                            <CommunityLinks />
                            <CommunityContacts />
                        </div>
                    </div>
                    <div className={s_style.settings_container__settings_buttons}>
                        <button className={style.submit__button} type="submit">Сохранить изменения</button>
                    </div>
                </form>
            </FormProvider>
        </div>
  )
}

export default withCommunityRights(CommunitySettings, ['canEditCommunity']) ;
