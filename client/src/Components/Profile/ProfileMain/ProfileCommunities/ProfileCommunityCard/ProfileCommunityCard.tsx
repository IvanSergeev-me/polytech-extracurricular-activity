import React, { FC } from "react";
import { communityStatusGlossary, ICommunityInProfile } from "../../../../../Models/Profile";
import style from "../../../Profile.module.scss";
import m_style from "../../ProfileMain.module.scss";
import classNames from "classnames/bind";
import { CommunityStatus } from "../../../../../Models/Profile";
import { NavLink } from "react-router-dom";
import gear from "../../../../../Assets/Images/Gear.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./PopupSettings.css";
 
const ProfileCommunityCard: FC<ICommunityInProfile> = (props) => {

    //need to select right
    const isCommunityAdmin = true;

    const cx = classNames.bind(style);
    const statusClass = cx({
        community_status_container__status: true,
        status_active:props.status === "active" as CommunityStatus,
        status_non_active:props.status === "non_active" as CommunityStatus,
      });

    return ( 
        <div className={m_style.communities__community_card_container}>
            <div className={m_style.community_card_container__community_left}>
                {props.image && <img src={props.image} alt="community" />}
            </div>
            <div className={m_style.community_card_container__community_right}>
                <div className={m_style.community_right__community_info}>
                    <div className={m_style.community_info__name_and_settings}>
                        <h3>{props.name}</h3>
                        <SettingsPopup community_id={props.id} community_status={props.status} isCommunityAdmin={isCommunityAdmin}/>
                    </div>
                    <p className={m_style.community_info__role}>Ваша роль: <span>{props.roles[0].name}</span></p>
                    <p className={m_style.community_info__date}>Вы состоите с: <span>{props.date_start}</span></p>
                </div>
                <div className={m_style.community_right__community_status_container}>
                    <div className={statusClass}>{communityStatusGlossary[props.status]}</div>
                    <NavLink className={m_style.community_status_container__link} to={`/community/${props.id}`}>Перейти</NavLink>
                </div>
            </div>
        </div>
    );
}

interface SettingsProps {
    community_id:number;
    isCommunityAdmin:boolean;
    community_status:CommunityStatus;
}

const SettingsPopup = ({community_status, community_id, isCommunityAdmin}:SettingsProps) =>{

    const onDeleteClick = () =>{
        console.log("deleted " + community_id)
    }

    return(
        <Popup
            keepTooltipInside={true}
            className={"community_settings"} 
            trigger={<img className={m_style.name_and_settings__gear} 
            src={gear} 
            alt="gear-settings"/>} 
            position="right center">
                <p className={style.subtitle}>Настройки сообщества</p>
                {isCommunityAdmin?
                    <p className={style.link} onClick={onDeleteClick}>Удалить сообщество</p>:
                    <p className={style.link}>Покинуть сообщество</p>}
        </Popup>
    );
}
 
export default ProfileCommunityCard;