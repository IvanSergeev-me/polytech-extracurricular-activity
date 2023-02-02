import React, { FC } from "react";
import { useCommunityUpdate } from "../../../../Context";
import PageService from "../../../Common/PageService/PageService";
import h_style from "../CommunityHeader.module.scss";
import GearIcon from "../../../../Assets/Images/Gear.png";
import FeedIcon from "../../../../Assets/Images/Feed.png";
import ScheduleIcon from "../../../../Assets/Images/Schedule.png";
import MembersIcon from "../../../../Assets/Images/Members2.png";
import InfoIcon from "../../../../Assets/Images/Info.png";
import RequestsIcon from "../../../../Assets/Images/Requests.png";
import RoleIcon from "../../../../Assets/Images/Role.png";
import { ServicesList, ServiceType } from "./ServicesList";

type PageServicesProps = {
    info_id:number;
    services:ServiceType[];
}

const PageServices:FC<PageServicesProps> = ({info_id,services}) =>{
    const communityUpdate = useCommunityUpdate();

    let onMembersServiceClick = () =>{
       communityUpdate((prev)=>({...prev, isHidden:!prev.isHidden}));
    }

    return(
        <div className={h_style.services__container}>
            <PageService id={0} name={"Публикации"} image={FeedIcon} color={"#EC5F6B"} link={`./`}/>
            <PageService id={1} name={"Расписание"} image={ScheduleIcon} color={"#EC5FB6"} link={`schedule`}/>
            <PageService id={2} name={"Участники"} image={MembersIcon} color={"#9CBBFF"}  onServiceClick={onMembersServiceClick}/>
            <PageService id={3} name={"Информация"} image={InfoIcon} color={"#5F6DEC"} link={`/activities/${info_id}`}/>
            <PageService id={4} name={"Настройки сообщества"} image={GearIcon} color={"#797979"} link={`settings`}/>
            <PageService id={5} name={"Настройки ролей"} image={RoleIcon} color={"#EE9E44"} link={`edit-roles`}/>
            <PageService id={6} name={"Заявки на вступление"} image={RequestsIcon} color={"#40C5C5"} link={`requests`}/>
        </div>
    )
}
/*
                {services.map((s,index)=><PageService 
                key={ServicesList[index].id} 
                id={ServicesList[index].id} 
                color={ServicesList[index].color}
                image={ServicesList[index].image}
                name={ServicesList[index].name}
                link={ServicesList[index].link?ServicesList[index].link:undefined}
                onServiceClick={ServicesList[index].onServiceClick?ServicesList[index].onServiceClick:undefined}
            
                />)}

                */