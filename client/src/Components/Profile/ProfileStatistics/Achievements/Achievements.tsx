import React from 'react';
import s_style from "../ProfileStatistics.module.scss";
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { achievementCardsSelector } from 'Selectors';
import { IAchievementCard } from 'Models/Profile';
import style from "../../Profile.module.scss";
import AchievementInfo from '../AchievementInfo/AchievementInfo';

type CardProps = IAchievementCard;

const Achievements = () => {

    const achCards = useTypedSelector(achievementCardsSelector);

    return (
        <div className={s_style.statisctics__achievements}>
            {achCards.map(a => <AchievementCard id={a.id} key={a.id} cardImage={a.cardImage} cardName={a.cardName} />)}
        </div>
    )
}

const AchievementCard = ({ id, cardImage, cardName }: CardProps) => {
    return (
        <div className={s_style.achievements__card}>
            <div className={s_style.card__image_box}>
                {cardImage ? <img src={cardImage} alt="card" /> : <p>{cardName.slice(0, 2).toUpperCase()}</p>}
            </div>
            <div className={s_style.card__info}>
                <AchievementInfo achievementId={id} trigger={<p className={style.subtitle_min}>{cardName}</p>}/>
            </div>
        </div>
    )
}

export default Achievements;
