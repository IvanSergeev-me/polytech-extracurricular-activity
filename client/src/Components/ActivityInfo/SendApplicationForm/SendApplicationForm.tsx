import React from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { ActivityType, activityTypeList } from "../../../Models/Activities";
import { ApplicationGlossary } from "../../../Models/ApplictationStatuses";
import { selectAppStatus } from "../../../Selectors";
import style from "../ActivityInfo.module.scss";

interface ApplicationFormProps{
    activityType:ActivityType;
    onAppStatusSubmit:Function;
    communityId?:number;
    applicationGlossary:ApplicationGlossary;
}

const SendApplicationForm= ({activityType, onAppStatusSubmit, communityId, applicationGlossary}:ApplicationFormProps) =>{
    const appStatus = useTypedSelector(selectAppStatus);

    let isNotSent = appStatus === applicationGlossary.APPLICATION_NOT_SENT;
    let isRejected =  appStatus === applicationGlossary.APPLICATION_REJECTED;
    let isSent =  appStatus === applicationGlossary.APPLICATION_SENT;
    let isAccepted =  appStatus === applicationGlossary.APPLICATION_ACCEPTED;

    const onSubmit = (evnt:any) =>{
        evnt.preventDefault();
        switch (appStatus){
            case applicationGlossary.APPLICATION_NOT_SENT:
            case  applicationGlossary.APPLICATION_REJECTED:
                onAppStatusSubmit(applicationGlossary.APPLICATION_SENT);
                break;
            case applicationGlossary.APPLICATION_SENT:
                onAppStatusSubmit(applicationGlossary.APPLICATION_NOT_SENT);
                break;
        }
    } 
    return(
        <form onSubmit={onSubmit} className={style.right__button_container}>
            {(isNotSent||isRejected) && <button className={`${style.button_container__button} ${style.def_btn}`}>Подать заявку</button>}
            {isSent && <button className={`${style.button_container__button} ${style.red_btn}`}>Отменить заявку</button>}
            {isAccepted && (activityType === activityTypeList.event) && <p className={`${style.button_container__button} ${style.grn_btn}`}>Ваша заявка принята</p>}
            {isAccepted && (activityType === activityTypeList.community) && 
                <NavLink to={`/community/${communityId}`} className={`${style.button_container__button} ${style.grn_btn}`}>Перейти к сообществу</NavLink>}
        </form>
    )
}

export default SendApplicationForm;