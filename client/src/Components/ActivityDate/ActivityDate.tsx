import React, {FC, useMemo} from "react";
import { parseDate } from "../../Assets/Images/Utils/parseActivityDate";
import style from "./ActivityDate.module.css"

interface ActivityDateProps{
    date?:string;
    time?:string;
} 

const ActivityDate:FC<ActivityDateProps> = (props) =>{
    let eventDate = props.date?props.date:""
    let predict = useMemo(()=> parseDate(eventDate),[eventDate])
    return(
        <div className={style.top__date_and_time}>
            <p className={style.date_and_time__title}>{predict}</p>
            <p className={style.date_and_time__title}>{props.date}</p>
            <span className={style.date_and_time__separation}>—</span>
            <p className={style.date_and_time__title}>{props.time}</p>
        </div>
    );
}



export default ActivityDate;