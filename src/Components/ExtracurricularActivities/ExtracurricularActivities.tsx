import React, {FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { IActivityCard } from "../../Models/Activities/index";
import style from "./Activities.module.css";
import { useNavigate } from 'react-router-dom';
import { selectActivities } from "../../Selectors";
import ActivityTag from "../ActivityTag/ActivityTag";
//import { useActivitiesActions } from "../../Hooks/useActions";


interface ImageBoxProps {
    id:number,
    description:string,
    image:string
}

const ExtracurricularActivities:FC = (props) => {
    let activities = useTypedSelector(selectActivities);

    if (activities.length === 0) return <div>Тут страница со смайликом : (</div>

    return (
        <section className={style.activities_container}>
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
    let tags = props.tags.map(tag => <ActivityTag key={tag.id} name={tag.name} color={tag.color} id={tag.id}/>);

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


const ActivityImageBox:FC<ImageBoxProps> = ({id, description, image}) =>{
    let navigate = useNavigate();
    
    let [isSelected, showDescription] = useState(false);

    let toggleSelect = () =>{
        isSelected?showDescription(false):showDescription(true);
    }

    const goToActivity = () =>{
        navigate(`activities/${id}`);
    }

    return(
        <div onClick={goToActivity} onMouseEnter={toggleSelect} onMouseLeave={toggleSelect} className={style.card_container__top}>
            <div className={style.top__image_box}>
                <img src={image} alt="pic" />
            </div>
            {isSelected?<div className={style.top__description_box}>
                <p className={style.description_box__text}>
                    {description}
                </p>
            </div>:null}
                
        </div>
    );
}

export default ExtracurricularActivities;
