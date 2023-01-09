import React, {FC} from "react";
import { IContact } from "../../../Models/Activities";
import style from "./ActivityContact.module.css"

const ActivityContact:FC<IContact> = (props) =>{
    return(
        <div className={style.contact}>
            <h3 className={style.contact__title}>{props.name}</h3>
            <span className={style.contact__separation}>—</span>
            {props.type === 'link' && <a href={`https://${props.contact}`} className={style.contact__text}> {props.contact}</a>}
            {props.type === 'contact' && <a href={`tel:${props.contact}`} className={style.contact__text}> {props.contact}</a>}
        </div>
    );
}
export default ActivityContact;