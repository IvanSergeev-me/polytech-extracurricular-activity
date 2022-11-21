import React, {FC, useState} from "react";
import { useParams } from "react-router-dom";
import PageService from "../PageService/PageService";
import style from './CommunityPage.module.css';

const CommunityPage:FC = (props) =>{
    let params = useParams();
    let isMember = true;
    let info_id = 1;

    return(
        <section className={style.community_page_container}>
            {isMember?<CommunityHeaderIfMember info_id={info_id}/>:<CommunityHeaderIfGuest />}
            <div>
                <div>
                    <h2>Публикации</h2>
                </div>
                <AsidePanel isHidden={true}/>
            </div>
            {params.id}
        </section>
    )
}

const CommunityHeaderIfGuest:FC = (props) =>{
    return(
        <div>

        </div>
    )
}

interface HeaderIfMemberProps{
    info_id:number;
}

const CommunityHeaderIfMember:FC<HeaderIfMemberProps> = (props) =>{
    let onMembersServiceClick = () =>{

    }

    return(
        <div className={style.community_page_container__heading}>
            <div className={style.heading__info}>
                <h1 className={style.title}>{"Музыкальное сообщество"}</h1>
                <p className={style.subtitle}>Вы участник</p>
            </div>
            <div className={style.services__container}>
                <PageService id={0} name={"Расписание"} image={""} color={"#FF18B2"} link={`/activities/${props.info_id}`}/>
                <PageService id={1} name={"Участники"} image={""} color={"#FF18B2"} onServiceClick={onMembersServiceClick}/>
                <PageService id={2} name={"Информация"} image={""} color={"#FF18B2"} link={`/activities/${props.info_id}`}/>
                <PageService id={3} name={"Настройки сообщества"} image={""} color={"#FF18B2"} link={`/activities/${props.info_id}`}/>
            </div>
        </div>
    )
}

const CommunityPublication:FC = (props) =>{
    return(
        <div>

        </div>
    )
}

interface AsideProps {
    isHidden: boolean
}

const AsidePanel:FC<AsideProps> = (props) =>{
    let [isHidden, changeHidden] = useState(props.isHidden);
    return(
        <div>
            Участники
        </div>
    )
}

const SendApplicationForm:FC = (props) =>{
    return(
        <div>

        </div>
    )
}

const AddPublicationForm:FC = (props) =>{
    return(
        <div>

        </div>
    )
}

export default CommunityPage;