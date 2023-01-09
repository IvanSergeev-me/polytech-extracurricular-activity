import React from "react";
import { typeGlossary } from "../../../../Models/Activities";
import { IUserRequest} from "../../../../Models/Profile";
import style from "../../Profile.module.css";
import a_style from "../ProfileAdmin.module.css";
import PopupMore from "./PopupMoreInfo/PopupMoreInfo";

 
const RequestCard = ({id, date, name, type, info}:IUserRequest) => {
    return ( 
        <div className={a_style.requests__request_container}>
            <h2 className={style.subtitle}>{name}</h2>
            <p className={a_style.request_container__type}>{typeGlossary[type]}</p>
            <p className={a_style.request_container__date}>Дата подачи заявки: {date}</p>
            <PopupMore type={type} info={info}/>
        </div>
    );
}

export default RequestCard;