import React from 'react';
import style from "../../Profile.module.scss";
import s_style from "../ProfileStatistics.module.scss";
import { StatisticsGlossary, statisticsGlossary } from 'Models/Profile';
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { statisticsSelector } from 'Selectors';

const Statistics = () => {

    const statisticsHeaders = statisticsGlossary;

    const statistics = useTypedSelector(statisticsSelector);

    return (
        <div className={s_style.statisctics__statistics_wrapper}>
            <h2 className={style.subtitle}>Статистика</h2>
            <div className={s_style.statistics_wrapper__list_wrapper}>
                <ul>
                    {Object.keys(statisticsHeaders).map(h =>
                        <li>{statisticsHeaders[h as keyof StatisticsGlossary]}: {statistics[h as keyof StatisticsGlossary]}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Statistics;
