import React, { FC, useState } from "react";
import { IEventInProfile, IEventShortInfo } from "../../../../../Models/Profile";
import style from "../../../Profile.module.scss";
import m_style from "../../ProfileMain.module.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./PopupSettings.scss";
import { IMemberShort } from "../../../../../Models/User";
import { useFirstLetters } from "../../../../../Hooks/useFirstLetters";
import { CompareDates } from "Assets/Utils/CompareDates";
import { useTypedSelector } from "Hooks/useTypedSelector";
import { selectUserId } from "Selectors";
import { NavLink } from "react-router-dom";

const ProfileEventCard: FC<IEventInProfile> = (props) => {

    const visitText = !CompareDates(props.date_visit)?"Вы были":"Мероприятие состоится";

    const letters = useFirstLetters([props.name[0],props.name[1]]);

    const userId = useTypedSelector(selectUserId);

    return ( 
        <div className={m_style.events__event_container}>
            <div className={m_style.event_container__image_and_info}>
                <div className={m_style.image_and_info__image_box}>
                    {props.image? <img src={props.image} alt="event" />:<p>{letters}</p>}
                </div>
                <div className={m_style.image_and_info__event_short_info}>
                    <p className={m_style.event_short_info__name}>{props.name}</p>
                    <p className={m_style.event_short_info__visit}>{visitText} <span>{props.date_visit}</span></p>
                </div>
            </div>
            <div className={m_style.event_container__controls}>
                <SettingsPopup info={props.info}/>
                {props.creatorId === userId && <NavLink to={`/event/${props.id}`} className={m_style.control_button}>Настройки</NavLink>}
            </div>
            
        </div>
    );
}

interface SettingsProps {
    info:IEventShortInfo
}

const SettingsPopup = ({info}:SettingsProps) =>{
    const [isOpen, setOpen] = useState<boolean>(false);

    const setIsOpen = () =>{
        setOpen(true)
    }

    const closePopup = () =>{
        setOpen(false);
    }

    return(
        <Popup
            modal={true}
            onOpen={setIsOpen} 
            open={isOpen} 
            className={"event_settings"} 
            trigger={<div className={m_style.control_button}>Подробнее</div>}>
                <div className={m_style.event_info_wrapper}>
                    <div className={m_style.event_info_wrapper__event_info_wrapper_top}>
                        <div className={m_style.event_info_wrapper_top__controls}>   
                            <h2 className={m_style.controls__name}>{info.name}</h2>
                            <div onClick={closePopup} className={style.link}>Закрыть</div>
                        </div>
                        <div className={m_style.event_info_wrapper_top__date_container}>
                            <p>{info.date_visit}</p>
                            <p>Место: {info.location}</p>
                        </div>     
                    </div>
                    <div className={m_style.event_info_wrapper__description_container}>
                        <p>{info.description}</p>
                    </div>
                    <div className={m_style.event_info_wrapper__event_members_container}>
                        <div className={m_style.event_members_container__title_box}>
                            <p>Это мероприятие также посетили {info.members.length} человек:</p>
                        </div>
                        {info.members.map(member => <MemberPreview 
                            id={member.id} 
                            key={member.id} 
                            name={member.name} 
                            lastname={member.lastname} 
                            group={member.group}/>)}
                    </div>
                </div>
        </Popup>
    );
}

const MemberPreview = ({id, lastname, name, group}:IMemberShort) =>{
    return(
        <div className={m_style.event_members_container__member}>
            <span>{lastname}</span>
            <span>{name},</span>
            <span>{group}</span>
        </div>
    );
}

export default ProfileEventCard;