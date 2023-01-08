import React, { FC } from 'react';
import { useTypedSelector } from '../../../Hooks/useTypedSelector';
import { selectCommunityInfo } from '../../../Selectors';
import style from "../CommunityPage.module.css";
import s_style from "./CommunitySettings.module.css";
import CommunityImage from './CommunityImage';
import CommunityTags from './CommunityTags';
import CommunityPhotos from './CommunityPhotos';

const CommunitySettings:FC = () => {
    const {
        //id,links,contacts,description,
        photos,image,tags,name,} = useTypedSelector(selectCommunityInfo);
    return (
        <div className={s_style.main_content__settings_section}>
            <div className={s_style.settings_section__header}>
                <h2 className={style.title}>Настройки сообщества</h2>
                <h3 className={style.subtitle}>{name}</h3>
            </div>
            <div className={s_style.settings_section__settings_container}>
                <div className={s_style.settings_container__settings_left}>
                    <CommunityImage image={image}/>
                    <CommunityTags tags={tags}/>
                    <CommunityPhotos photos={photos}/>
                </div>
                <div className={s_style.settings_container__settings_right}>
                    Правая часть
                </div>
            </div>
        </div>
  )
}

export default CommunitySettings;
