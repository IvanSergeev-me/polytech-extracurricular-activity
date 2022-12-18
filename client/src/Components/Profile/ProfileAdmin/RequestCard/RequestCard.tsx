import React from "react";
import { typeGlossary } from "../../../../Models/Activities";
import { IUserRequest} from "../../../../Models/Profile";
import style from "../../Profile.module.css";
import PopupMore from "./PopupMoreInfo/PopupMoreInfo";

 
const RequestCard = ({id, date, name, type, info}:IUserRequest) => {
    return ( 
        <div className={style.requests__request_container}>
            <h2 className={style.subtitle}>{name}</h2>
            <p className={style.request_container__type}>{typeGlossary[type]}</p>
            <p className={style.request_container__date}>Дата подачи заявки: {date}</p>
            <PopupMore type={type} info={info}/>
        </div>
    );
}

export default RequestCard;