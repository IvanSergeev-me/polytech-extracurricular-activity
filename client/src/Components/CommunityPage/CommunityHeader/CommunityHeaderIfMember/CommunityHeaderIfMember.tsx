import React, { FC } from 'react';
import { HeaderProps } from '../CommunityHeader';
import h_style from "../CommunityHeader.module.scss";
import style from "../../CommunityPage.module.scss";
import "./OwlCarouselSettings.scss";
import GearIcon from "../../../../Assets/Images/Gear.png";
import FeedIcon from "../../../../Assets/Images/Feed.png";
import ScheduleIcon from "../../../../Assets/Images/Schedule.png";
import MembersIcon from "../../../../Assets/Images/Members2.png";
import InfoIcon from "../../../../Assets/Images/Info.png";
import RequestsIcon from "../../../../Assets/Images/Requests.png";
import RoleIcon from "../../../../Assets/Images/Role.png";
import { useCommunityUpdate } from '../../../../Context';
import PageService from '../../../Common/PageService/PageService';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

    const breakpoints = {
        0:{
            items:2,
        },
        800:{
            items:3
        },
        1400:{
            items:7,
        }
    }

    return(
        <ReactOwlCarousel responsive={breakpoints}  stageClass={"services-stage"} margin={10} className={h_style.services__container} >
                <PageService id={0} name={"Публикации"} image={FeedIcon} color={"#EC5F6B"} link={`./`}/>
                <PageService id={1} name={"Расписание"} image={ScheduleIcon} color={"#EC5FB6"} link={`schedule`}/>
                <PageService id={2} name={"Участники"} image={MembersIcon} color={"#9CBBFF"}  onServiceClick={onMembersServiceClick}/>
                <PageService id={3} name={"Информация"} image={InfoIcon} color={"#5F6DEC"} link={`/activities/${props.info_id}`}/>
                <PageService id={4} name={"Настройки сообщества"} image={GearIcon} color={"#797979"} link={`settings`}/>
                <PageService id={5} name={"Настройки ролей"} image={RoleIcon} color={"#EE9E44"} link={`edit-roles`}/>
                <PageService id={6} name={"Заявки на вступление"} image={RequestsIcon} color={"#40C5C5"} link={`requests`}/>
        </ReactOwlCarousel>
    )
}