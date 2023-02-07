import React, { FC } from 'react';
import { HeaderProps } from '../CommunityHeader';
import h_style from "../CommunityHeader.module.scss";
import style from "../../CommunityPage.module.scss";
import "./OwlCarouselSettings.scss";
import {FeedIcon, GearIcon, InfoIcon,RequestsIcon,RoleIcon,ScheduleIcon,MembersIcon} from "Assets";
import { useCommunityUpdate } from '../../../../Context';
import PageService from '../../../Common/PageService/PageService';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { withCommunityRights } from 'Components/HOC/withCommunityRights';

export const CommunityHeaderIfMember:FC<HeaderProps> = ({community_name,info_id}) =>{
    return(
        <div className={h_style.community_page_container__heading}>
            <div className={h_style.heading__info}>
                <h1 className={style.title}>{community_name}</h1>
                <p className={style.subtitle}>Вы участник</p>
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

    const onMembersServiceClick = () =>{
       communityUpdate((prev)=>({...prev, isHidden:!prev.isHidden}));
    }

    return(
        <div className={h_style.services__container} >
                <PageService id={0} name={"Публикации"} image={FeedIcon} color={"#EC5F6B"} link={`./`}/>
                <PageService id={1} name={"Расписание"} image={ScheduleIcon} color={"#EC5FB6"} link={`schedule`}/>
                <PageService id={2} name={"Участники"} image={MembersIcon} color={"#9CBBFF"}  onServiceClick={onMembersServiceClick}/>
                <PageService id={3} name={"Информация"} image={InfoIcon} color={"#5F6DEC"} link={`/activities/${props.info_id}`}/>
                <SettingsPageService />
                <RolesPageService />
                <RequestsPageService />
        </div>
    )
}

const SettingsPageService = withCommunityRights(
    () => <PageService id={4} name={"Настройки сообщества"} image={GearIcon} color={"#797979"} link={`settings`} />, ["canEditCommunity"]);

const RolesPageService = withCommunityRights(
    () => <PageService id={5} name={"Настройки ролей"} image={RoleIcon} color={"#EE9E44"} link={`edit-roles`}/>, ["canEditRoles"]);

const RequestsPageService = withCommunityRights(
    () => <PageService id={6} name={"Заявки на вступление"} image={RequestsIcon} color={"#40C5C5"} link={`requests`}/>, ["canEditRequests"]);