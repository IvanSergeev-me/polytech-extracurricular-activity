import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { IActivityCard } from "../../Models/Activities/index";
import style from "./Activities.module.scss";
import { selectActivities } from "../../Selectors";
import ActivityTag from "../Common/ActivityTag/ActivityTag";
import NotFoundPage from "../Common/NotFoundPage/NotFoundPage";
import ActivityImageBox from "./ActivityImageBox/ActivityImageBox";
import FiltersPanel from "./FiltersPanel/FiltersPanel";
//import { useActivitiesActions } from "../../Hooks/useActions";

const ExtracurricularActivities:FC = (props) => {
    let activities = useTypedSelector(selectActivities);

    if (activities.length === 0) return <NotFoundPage />

    return (
        <section className={style.activities_container}>
            <FiltersPanel />
            <div className={style.activities_container__activities}>
                {activities.map(actv => <ActivityCard 
                    key={actv.id} 
                    id={actv.id} 
                    name={actv.name} 
                    description={actv.description} 
                    type={actv.type} 
                    image={actv.image}
                    tags={actv.tags}/>)}
            </div>
        </section> 
        );
}
 
const ActivityCard:FC<IActivityCard> = (props) =>{
    const tags = props.tags.map(tag => <ActivityTag key={tag.id} name={tag.name} color={tag.color} id={tag.id}/>);

    return(
        <div className={style.card_container}>
            <ActivityImageBox id={props.id} description={props.description} image={props.image}/>
            <NavLink to={`activities/${props.id}`} className={style.card_container__tltle_box}>
                <h1 className={style.tltle_box__text}>{props.name}</h1>
            </NavLink>
            <div className={style.card_container__tags_box}>
                {tags}
            </div>       
        </div>
    );
}

export default ExtracurricularActivities;
