import React, { SyntheticEvent } from 'react'
import { useFirstLetters } from '../../../../Hooks/useFirstLetters';
import { IJoinRequest } from '../../../../Models/Community';
import r_style from "../CommunityJoinRequests.module.scss";

const JoinRequestCard = ({date,group,id,lastname,name,time,image}:IJoinRequest) => {

    const firstLetters = useFirstLetters([lastname, name]);

    const approveRequest = (e:SyntheticEvent) =>{
        e.preventDefault();
        console.log(id);
    }

    const rejectRequest = (e:SyntheticEvent) =>{
        e.preventDefault();
        console.log(id);
    }

    return (
        <div className={r_style.requests_container_request}>
            <div className={r_style.request__top}>
                <div className={r_style.top__image_box}>
                    {image?<img src={image} alt="student" />:firstLetters}
                </div>
                <div className={r_style.top__info_box}>
                    <div className={r_style.info_box__name}><span>{lastname}</span><span>{name}</span>,<span>{group}</span></div>
                    <div className={r_style.info_box__date}><span>{date}</span><span>{time}</span></div>
                </div>
            </div>
            <div className={r_style.request__buttons_container}>
                <button className={r_style.approve_button} onClick={approveRequest}>Принять</button>
                <button className={r_style.reject_button} onClick={rejectRequest}>Отклонить</button>
            </div>
        </div>
  )
}
export default JoinRequestCard;
