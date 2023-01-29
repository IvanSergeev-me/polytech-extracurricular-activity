import React, {FC} from "react";
import style from "../CommunityPage.module.scss";
import h_style from "./CommunityHeader.module.css";
import PageService from "../../Common/PageService/PageService";
import { useCommunityUpdate } from "../../../Context";
import GearIcon from "../../../Assets/Images/Gear.png";
import FeedIcon from "../../../Assets/Images/Feed.png";
import ScheduleIcon from "../../../Assets/Images/Schedule.png";
import MembersIcon from "../../../Assets/Images/Members2.png";
import InfoIcon from "../../../Assets/Images/Info.png";
import RequestsIcon from "../../../Assets/Images/Requests.png";
import RoleIcon from "../../../Assets/Images/Role.png";

interface HeaderIfMemberProps{
    info_id:number;
    community_name:string
}

export const CommunityHeaderIfGuest:FC<HeaderIfMemberProps> = (props) =>{
    return(
        <div className={h_style.community_page_container__heading}>
        <div className={h_style.heading__info}>
            <h1 className={style.title}>{props.community_name}</h1>
            <p className={style.subtitle}>Вы гость</p>
        </div>
        <PageServices info_id={props.info_id}/>
    </div>
    )
}

export const CommunityHeaderIfMember:FC<HeaderIfMemberProps> = (props) =>{
    return(
        <div className={h_style.community_page_container__heading}>
            <div className={h_style.heading__info}>
                <h1 className={style.title}>{props.community_name}</h1>
                <p className={style.subtitle}>Вы участник</p>
            </div>
            <PageServices info_id={props.info_id}/>
        </div>
    )
}

interface PageServicesProps{
    info_id:number;
}

const PageServices:FC<PageServicesProps> = (props) =>{
    const communityUpdate = useCommunityUpdate();

    let onMembersServiceClick = () =>{
       communityUpdate((prev)=>({...prev, isHidden:!prev.isHidden}));
    }

    return(
        <div className={h_style.services__container}>
                <PageService id={0} name={"Публикации"} image={FeedIcon} color={"#EC5F6B"} link={`./`}/>
                <PageService id={1} name={"Расписание"} image={ScheduleIcon} color={"#EC5FB6"} link={`schedule`}/>
                <PageService id={2} name={"Участники"} image={MembersIcon} color={"#9CBBFF"}  onServiceClick={onMembersServiceClick}/>
                <PageService id={3} name={"Информация"} image={InfoIcon} color={"#5F6DEC"} link={`/activities/${props.info_id}`}/>
                <PageService id={4} name={"Настройки сообщества"} image={GearIcon} color={"#797979"} link={`settings`}/>
                <PageService id={5} name={"Настройки ролей"} image={RoleIcon} color={"#EE9E44"} link={`edit-roles`}/>
                <PageService id={6} name={"Заявки на вступление"} image={RequestsIcon} color={"#40C5C5"} link={`requests`}/>
        </div>
    )
}