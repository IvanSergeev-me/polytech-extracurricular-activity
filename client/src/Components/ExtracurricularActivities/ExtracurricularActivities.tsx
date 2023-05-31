import React, { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { IActivityCard } from "../../Models/Activities/index";
import style from "./Activities.module.scss";
import { selectActivities } from "../../Selectors";
import ActivityTag from "../Common/ActivityTag/ActivityTag";
import ActivityImageBox from "./ActivityImageBox/ActivityImageBox";
import FiltersPanel from "./FiltersPanel/FiltersPanel";
import { getActivitiesThunk } from "Redux/Reducers/Activities/action-creators";
import { useAppDispatch } from "Hooks/useActions";

const ExtracurricularActivities: FC = (props) => {

    const activities = useTypedSelector(selectActivities);

    const isActivities = activities.length !== 0;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getActivitiesThunk({page:1, size:100}));
    }, [dispatch])
    

    return (
        <section className={style.activities_container}>
            <h1 className={style.title}>Внеучебные активности</h1>
            {isActivities && <FiltersPanel />}
            <div className={style.activities_container__activities}>
                {activities.map(actv => <ActivityCard
                    key={actv.id}
                    id={actv.id}
                    name={actv.name}
                    description={actv.description}
                    type={actv.type}
                    image={actv.image}
                    tags={actv.tags} />)}
            </div>
        </section>
    );
}

const ActivityCard: FC<IActivityCard> = (props) => {
    const tags = props.tags.map((tag,index) => <ActivityTag key={index} name={tag.name} color={tag.color} id={tag.id} />);

    return (
        <div className={style.card_container}>
            <ActivityImageBox id={props.id} description={props.description} image={props.image} />
            <NavLink to={`activities/${props.id}`} className={style.card_container__tltle_box}>
                <h1 className={style.tltle_box__text}>{props.name}</h1>
            </NavLink>
            {tags && props.tags[0].name && <div className={style.card_container__tags_box}>
                {tags}
            </div>}
        </div>
    );
}

export default ExtracurricularActivities;
