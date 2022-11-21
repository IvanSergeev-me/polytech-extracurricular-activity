import React, {FC} from "react";
//import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { selectActivity, selectAppStatus } from "../../Selectors";
import ActivityTag from "../ActivityTag/ActivityTag";
import ActivityContact from "../ActivityContact/ActivityContact"
import style from "./ActivityInfo.module.css"
import ActivityDate from "../ActivityDate/ActivityDate";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ActivityPhotoCard from "../ActivityPhotoCard/ActivityPhotoCard";
import { ActivityInfoApplicationStatus } from "../../Models/ApplictationStatuses";
import { useActivityInfoActions } from "../../Hooks/useActions";
import { NavLink } from "react-router-dom";
import { ActivityType } from "../../Models/Activities";
//import * as members__icon from "../../Assets/Images/members.png";

const ActivityInfo:FC = () => {
    //let params = useParams();

    const activityInfo = useTypedSelector(selectActivity);
    

    const {setAppStatus} = useActivityInfoActions()

    const onAppStatusSubmit = (payload:ActivityInfoApplicationStatus) =>{
        setAppStatus(payload);
    }

    return (
        <section className={style.activity_container}>
            <div className={style.activity_container__top}>
                <div className={style.top__heading}>
                    <h1 className={style.title}> 
                        {activityInfo?.name}
                    </h1>
                    <div className={style.members}>
                        <img className={style.members__icon} src="https://icons.veryicon.com/png/o/system/icon-library-of-signaling-system/member-13.png" alt="members icon" />
                        <p className={style.members__text}>{activityInfo?.members_count?activityInfo.members_count:"0"} участников</p>
                    </div>
                </div>
                {activityInfo?.type === 'event' && <ActivityDate time={activityInfo.time} date={activityInfo.date}/>}
                <div className={style.top__tags_container}>
                    {activityInfo?.tags.map(tag =><ActivityTag id={tag.id} key={tag.id} color={tag.color} name={tag.name}/>)}
                </div>
            </div>
            <div className={style.activity_container__main}>
                <div className={style.main__left}>
                    {activityInfo?.image?<img className={style.left__img} src={activityInfo?.image} alt="activity pic" />:<div className={style.left__filler}></div>}
                    
                </div>
                <div className={style.main__right}>
                    <div className={style.right__description}>
                        {activityInfo?.description}
                    </div>
                    <SendApplicationForm communityId={activityInfo.communityId} activityType={activityInfo?.type} onAppStatusSubmit={onAppStatusSubmit}/>
                </div>
            </div>
            <div className={style.activity_container__contacts_and_links}>
                <div className={style.contacts_and_links__content}>
                    <h2 className={style.title}>Ссылки</h2>
                    <ul className={style.contacts_list}>
                        {activityInfo?.links.map(link => <li  key={link.id} className={style.contacts_list__row}><ActivityContact id={link.id} key={link.id} name={link.name} contact={link.contact} type={link.type}/></li>)}
                    </ul>
                </div>
                <div className={style.contacts_and_links__content}>
                    <h2 className={style.title}>Контакты</h2>
                    <ul className={style.contacts_list}>
                        {activityInfo?.contacts.map(contact => <li  key={contact.id} className={style.contacts_list__row}><ActivityContact id={contact.id} key={contact.id} name={contact.name} contact={contact.contact} type={contact.type}/></li>)}
                    </ul>
                </div>
            </div>
            {activityInfo?.photos.length!==0 && <div className={style.activity_container__gallery}>
                <h2 className={style.title}>Фотогалерея</h2>
                <div className={style.gallery__carousel_container}>
                    <OwlCarousel margin={10} rewind={true} dots={true}> 
                        {activityInfo?.photos.map(photo => <ActivityPhotoCard id={photo.id} key={photo.id} content={photo.content} description={photo.description}/>)}
                    </OwlCarousel>
                </div>
            </div>}
           
        </section> 
        );
}

interface ApplicationFormProps{
    activityType:ActivityType;
    onAppStatusSubmit:Function;
    communityId:number | undefined;
    //Component:FC
}

const SendApplicationForm:FC<ApplicationFormProps> = (props) =>{
    const appStatus = useTypedSelector(selectAppStatus);

    let isNotSent = appStatus==="actioninfo/APPLICATION_NOT_SENT";
    let isRejected = appStatus === "actioninfo/APPLICATION_REJECTED";
    let isSent = appStatus==="actioninfo/APPLICATION_SENT";
    let isAccepted = appStatus==="actioninfo/APPLICATION_ACCEPTED";

    const onSubmit = (evnt:any) =>{
        evnt.preventDefault();
        switch (appStatus){
            case "actioninfo/APPLICATION_NOT_SENT":
            case  "actioninfo/APPLICATION_REJECTED":
                props.onAppStatusSubmit("actioninfo/APPLICATION_SENT");
                break;
            case "actioninfo/APPLICATION_SENT":
                props.onAppStatusSubmit("actioninfo/APPLICATION_NOT_SENT");
                break;
        }
    } 
    return(
        <form onSubmit={onSubmit} className={style.right__button_container}>
            {(isNotSent||isRejected) && <button className={`${style.button_container__button} ${style.def_btn}`}>Подать заявку</button>}
            {isSent && <button className={`${style.button_container__button} ${style.red_btn}`}>Отменить заявку</button>}
            {isAccepted && (props.activityType === 'event') && <p className={`${style.button_container__button} ${style.grn_btn}`}>Ваша заявка принята</p>}
            {isAccepted && (props.activityType === 'community') && <NavLink to={`/community/${props.communityId}`} className={`${style.button_container__button} ${style.grn_btn}`}>Перейти к сообществу</NavLink>}
        </form>
    )
}

export default ActivityInfo;