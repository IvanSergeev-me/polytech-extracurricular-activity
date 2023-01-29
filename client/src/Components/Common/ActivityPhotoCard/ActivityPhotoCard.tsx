import React, {FC, useState} from "react";
import { IPhoto } from "../../../Models/Activities";
import style from "./ActivityPhotoCard.module.scss";

const ActivityPhotoCard:FC<IPhoto> = (props) =>{

    const selectedDefault = -1;
    // eslint-disable-next-line
    const [selectedId, setSelect] = useState(selectedDefault);

    const selectCard = (param:number) =>{
        setSelect(param);
    }

    return(
        <div onMouseEnter={()=>selectCard(props.id)} onMouseLeave={()=>selectCard(selectedDefault)} className={style.card_container}>
            <div className={style.card_container__image_box}>
                {props.content? <img className={style.image_box__image} src={props.content} alt="photo_content"/>: <div className={style.image_box__filler}></div>}
            </div>
            <div className={style.card_container__description_box}>
                <p className={style.description_box__text}>{props.description}</p>
            </div>
        </div>
    );
}
export default ActivityPhotoCard;