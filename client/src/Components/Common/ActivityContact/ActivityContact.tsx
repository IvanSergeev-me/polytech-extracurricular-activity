import React, {FC} from "react";
import { IContact } from "../../../Models/Activities";
import style from "./ActivityContact.module.scss"

const ActivityContact:FC<IContact> = ({id,contact,name,type}) =>{
    return(
        <div className={style.contact}>
            <h3 className={style.contact__title}>{name}</h3>
            <span className={style.contact__separation}>—</span>
            {type === 'link' && <a href={`https://${contact}`} className={style.contact__text}> {contact}</a>}
            {type === 'contact' && <a href={`tel:${contact}`} className={style.contact__text}> {contact}</a>}
        </div>
    );
}
export default ActivityContact;