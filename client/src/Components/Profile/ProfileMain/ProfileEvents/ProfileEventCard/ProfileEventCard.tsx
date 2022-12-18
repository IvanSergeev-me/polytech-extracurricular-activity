import React, { FC, useCallback, useState } from "react";
import { IEventInProfile, IEventShortInfo } from "../../../../../Models/Profile";
import style from "../../../Profile.module.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./PopupSettings.css";
import { getFirstLetters } from "../../../../../Assets/Utils/getFirstLetters";
import { IMemberShort } from "../../../../../Models/User";

const ProfileEventCard: FC<IEventInProfile> = (props) => {

    // eslint-disable-next-line
    const getLetters = useCallback(()=>getFirstLetters([props.name[0],props.name[1]]),[]) 

    const letters = getLetters();

    return ( 
        <div className={style.events__event_container}>
            <div className={style.event_container__image_box}>
                {props.image? <img src={props.image} alt="event" />:<p>{letters}</p>}
            </div>
            <div className={style.event_container__event_short_info}>
                <p className={style.event_short_info__name}>{props.name}</p>
                <p className={style.event_short_info__visit}>Вы были <span>{props.date_visit}</span></p>
            </div>
            <SettingsPopup info={props.info}/>
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
        <Popup onOpen={setIsOpen} open={isOpen} contentStyle={style} className={"event_settings"} trigger={<div className={style.event_container__event__more_button}>Подробнее</div>}>
            <div className={style.event_info_wrapper}>
                <div className={style.event_info_wrapper__event_info_wrapper_top}>
                    <div className={style.event_info_wrapper_top__controls}>   
                        <h2 className={style.title}>{info.name}</h2>
                        <div onClick={closePopup} className={style.link}>Закрыть</div>
                    </div>
                    <div className={style.event_info_wrapper_top__date_container}>
                        <p>{info.date_visit}</p>
                        <p>Место: {info.location}</p>
                    </div>     
                </div>
                <div className={style.event_info_wrapper__description_container}>
                    <p>{info.description}</p>
                </div>
                <div className={style.event_info_wrapper__event_members_container}>
                    <div className={style.event_members_container__title_box}>
                        <p className={style.subtitle}>Это мероприятие также посетили {info.members.length} человек:</p>
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
        <div className={style.event_members_container__member}>
            <span>{lastname}</span>
            <span>{name}</span>
            <span>{group}</span>
        </div>
    );
}

export default ProfileEventCard;