import React from 'react';
import s_style from "../ProfileStatistics.module.scss";
import style from "../../Profile.module.scss";
import { PlusIcon, ShareIcon } from 'Assets';
import AddAchievementPopup from '../AddAchievement/AddAchievementPopup';

const StatisticsHeader = () => {
    return (
        <div className={s_style.statisctics__header}>
            <h1 className={style.title}>Ваши достижения и статистика</h1>
            <AddAchievementPopup
                trigger={<button className={style.button}><img src={PlusIcon} alt="plus" />Добавить</button>} />
            <button className={style.button}>Поделиться <img src={ShareIcon} alt="share" /></button>
        </div>
    )
}

export default StatisticsHeader;
