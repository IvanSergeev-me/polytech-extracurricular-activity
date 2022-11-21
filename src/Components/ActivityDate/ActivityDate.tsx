import React, {FC, useMemo} from "react";
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

const parseDate = (date:string) =>{
    let newDate = new Date();
    let dateToCompareRaw = new Date(date);
    let dateToday = newDate.getDate();
    let dateToCompare = dateToCompareRaw.getDate();
    if(dateToday > dateToCompare){
        return "Мероприятие состоялось"
    }
    if(dateToday < dateToCompare){
        return "Мероприятие запланировано"
    }
    if(dateToday === dateToCompare){
        return "Мероприятие сегодня"
    }
    return "Примерное время мероприятия";
}

export default ActivityDate;