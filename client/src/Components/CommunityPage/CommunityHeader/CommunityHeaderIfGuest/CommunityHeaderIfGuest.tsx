import React, { FC } from 'react';
import { HeaderProps } from '../CommunityHeader';
import h_style from "../CommunityHeader.module.scss";
import style from "../../CommunityPage.module.scss";
import { useCommunityUpdate } from '../../../../Context';
import PageService from '../../../Common/PageService/PageService';
import FeedIcon from "../../../../Assets/Images/Feed.png";
import ScheduleIcon from "../../../../Assets/Images/Schedule.png";
import MembersIcon from "../../../../Assets/Images/Members2.png";
import InfoIcon from "../../../../Assets/Images/Info.png";

export const CommunityHeaderIfGuest:FC<HeaderProps> = ({community_name,info_id}) =>{
    return(
        <div className={h_style.community_page_container__heading}>
        <div className={h_style.heading__info}>
            <h1 className={style.title}>{community_name}</h1>
            <p className={style.subtitle}>Вы гость</p>
        </div>
        <PageServices info_id={info_id}/>
    </div>
    )
}

type PageServicesProps = {
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
        </div>
    )
}