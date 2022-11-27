import React, {FC} from "react";
import style from "../CommunityPage.module.css";
import PageService from "../../PageService/PageService";
import { useCommunityUpdate } from "../../../Context";

export const CommunityHeaderIfGuest:FC = (props) =>{
    return(
        <div>

        </div>
    )
}

interface HeaderIfMemberProps{
    info_id:number;
    community_name:string
}

export const CommunityHeaderIfMember:FC<HeaderIfMemberProps> = (props) =>{
    return(
        <div className={style.community_page_container__heading}>
            <div className={style.heading__info}>
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
        <div className={style.services__container}>
                <PageService id={0} name={"Публикации"} image={""} color={"#FF18B2"} link={`./`}/>
                <PageService id={1} name={"Расписание"} image={""} color={"#FF18B2"} link={`schedule`}/>
                <PageService id={2} name={"Участники"} image={""} color={"#FF18B2"}  onServiceClick={onMembersServiceClick}/>
                <PageService id={3} name={"Информация"} image={""} color={"#FF18B2"} link={`/activities/${props.info_id}`}/>
                <PageService id={4} name={"Настройки сообщества"} image={""} color={"#FF18B2"} link={`/activities/${props.info_id}`}/>
                <PageService id={5} name={"Настройки ролей"} image={""} color={"#FF18B2"} link={`/activities/${props.info_id}`}/>
                <PageService id={6} name={"Заявки на вступление"} image={""} color={"#FF18B2"} link={`/activities/${props.info_id}`}/>
        </div>
    )
}