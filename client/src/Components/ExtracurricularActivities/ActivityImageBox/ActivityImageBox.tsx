import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "../Activities.module.scss";

interface ImageBoxProps {
    id:number,
    description:string,
    image:string
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
export default ActivityImageBox