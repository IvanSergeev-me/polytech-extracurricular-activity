import React from 'react';
import style from "../../Profile.module.scss";
import s_style from "../ProfileStatistics.module.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { activityGraphDataSelector } from 'Selectors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ActivityGraph = () => {

    const graphData = useTypedSelector(activityGraphDataSelector);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    const data = {
        labels: graphData.map(data => data.dayName),
        datasets: [
            {
                label: 'Активность студента',
                data: graphData.map((data) => data.activityIndex),
                borderColor: '#567dff',
                backgroundColor: '#567dff',
            },
        ],
    };

    return (
        <div className={s_style.statisctics__graph_wrapper}>
            <h2 className={style.subtitle}>Ваша активность</h2>
            <div className={s_style.graph_wrapper__graph}>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}

export default ActivityGraph;
