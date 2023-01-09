import React, { useState } from "react";
import { ICommunityInfo, IEventInfo } from "../../../../../Models/Profile";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./PopupSettings.css";
import style from "../../../Profile.module.css";
import a_style from "../../ProfileAdmin.module.css";

const  PopupMore = ({type, info}:any) =>{

    const [isOpen, setOpen] = useState<boolean>(false);

    const setIsOpen = () =>{
        setOpen(true)
    }

    const closePopup = () =>{
        setOpen(false);
    }

    const handleApprove = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        console.log( info.id);
    }

    const handleReject = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        console.log( info.id)
    }

    if(type==="community"){
        const communityInfo = info as ICommunityInfo;
        return(<PopupMoreCommunityInfo
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            closePopup={closePopup}
            handleApprove={handleApprove}
            handleReject={handleReject} 
            id={communityInfo.id} 
            authorGroup={communityInfo.authorGroup} 
            authorLastname={communityInfo.authorLastname}
            authorName={communityInfo.authorName}
            date={communityInfo.date}
            direction={communityInfo.direction}
            folder_link={communityInfo.folder_link}
            isNeedAudience={communityInfo.isNeedAudience}
            name={communityInfo.name}
            targets={communityInfo.targets}/>);
    }
    if(type==="event"){
        const eventInfo = info as IEventInfo;
        return(<PopupMoreEventInfo 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            closePopup={closePopup}
            handleApprove={handleApprove}
            handleReject={handleReject} 
            id={eventInfo.id} 
            name={eventInfo.name}/>)
    }
    return null;
    
}


interface PopupProps{
    handleApprove: (e:React.SyntheticEvent)=>void;
    handleReject:(e:React.SyntheticEvent)=>void;
    setIsOpen:()=>void;
    closePopup:()=>void;
    isOpen:boolean;
} 
type PopupMoreCommunityInfoProps = ICommunityInfo & PopupProps;

const PopupMoreCommunityInfo = ({
    id,
    name,
    authorGroup,
    authorLastname,
    authorName,
    date,
    direction,
    folder_link,
    isNeedAudience,
    targets,
    handleApprove,
    handleReject,
    setIsOpen,
    closePopup,
    isOpen
}:PopupMoreCommunityInfoProps) =>{

    return(
        <Popup onOpen={setIsOpen} open={isOpen} className={"request_more"} trigger={<div className={a_style.event_container__event__more_button}>Подробнее</div>}>
            <div className="request_more__content_box">
                <div className={"content_box__request_top"}>
                    <div className={"request_top__title_box"}>
                        <h2 className={style.subtitle}><span>Заявка # {id}</span><span>{name}</span></h2>
                        <p onClick={closePopup} className={style.link}>закрыть</p>
                    </div>
                    
                    <div className={"request_top__field"}><h2 className={style.subtitle}>Направление:</h2><p>{direction}</p></div>
                    <div className={"request_top__field"}><h2 className={style.subtitle}>Цели и задачи:</h2><p>{targets}</p></div>
                    <div className={"request_top__field"}><h2 className={style.subtitle}>Ссылки на документацию:</h2><p>{folder_link}</p></div>
                    <div className={"request_top__field"}><h2 className={style.subtitle}>Требуется аудитория:</h2><p>{isNeedAudience?"Да":"Нет"}</p></div>
                    <div className={"request_top__field"}>
                        <h2 className={style.subtitle}>Имя заявителя и группа:</h2>
                        <p>
                            <span>{authorLastname}</span>
                            <span>{authorName},</span>
                            <span>{authorGroup}</span>
                        </p>
                    </div>
                    <div className={"request_top__field"}><h2 className={style.subtitle}>Дата подачи заявки:</h2><p>{date}</p></div>
                </div>
                <div className={"content_box__request_buttons"}>
                    <button onClick={handleApprove} className={"request_buttons__button approve"}>Одобрить</button>
                    <button onClick={handleReject} className={"request_buttons__button reject"}>Отклонить</button>
                </div>
            </div>
        </Popup>
    );
}

type PopupMoreEventInfoProps = IEventInfo & PopupProps;

const PopupMoreEventInfo = ({
    setIsOpen,
    closePopup,
    handleApprove,
    handleReject,
    isOpen,
    id,
    name}:PopupMoreEventInfoProps) =>{

    return(
        <Popup onOpen={setIsOpen} open={isOpen} trigger={<div className={a_style.event_container__event__more_button}>Подробнее</div>}>
            <div className="request_more__content_box">
                <div className={"content_box__request_top"}>
                    <div className={"request_top__title_box"}>
                        <h2 className={style.subtitle}><span>Заявка # {id}</span><span>{name}</span></h2>
                        <p onClick={closePopup} className={style.link}>закрыть</p>
                    </div>
                </div>
                <div className={"content_box__request_buttons"}>
                    <button onClick={handleApprove} className={"request_buttons__button approve"}>Одобрить</button>
                    <button onClick={handleReject} className={"request_buttons__button reject"}>Отклонить</button>
                </div>
            </div>
        </Popup>
    );
}

export default PopupMore;