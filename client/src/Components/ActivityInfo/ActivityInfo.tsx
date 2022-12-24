import React, {FC} from "react";
//import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { selectActivity } from "../../Selectors";
import ActivityTag from "../ActivityTag/ActivityTag";
import ActivityContact from "../ActivityContact/ActivityContact";
import style from "./ActivityInfo.module.css";
import ActivityDate from "../ActivityDate/ActivityDate";
import { ActivityInfoApplicationStatus } from "../../Models/ApplictationStatuses";
import { useActivityInfoActions } from "../../Hooks/useActions";
import membersIcon from "../../Assets/Images/members.png";
import Carousel from "../OwlCarousel/OwlCarousel";
import SendApplicationForm from "./SendApplicationForm/SendApplicationForm";
import { activityApplicationGlossary } from "../../Models/ApplictationStatuses";
import { activityTypeList } from "../../Models/Activities/index";

const ActivityInfo:FC = () => {
    //let params = useParams();

    const activityInfo = useTypedSelector(selectActivity);
    
    const {setAppStatus} = useActivityInfoActions();

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
                        <img className={style.members__icon} src={membersIcon} alt="members icon" />
                        <p className={style.members__text}>{activityInfo?.members_count?activityInfo.members_count:"0"} участников</p>
                    </div>
                </div>
                {activityInfo?.type === activityTypeList.event && <ActivityDate time={activityInfo.time} date={activityInfo.date}/>}
                <div className={style.top__tags_container}>
                    {activityInfo?.tags.map(tag =><ActivityTag id={tag.id} key={tag.id} color={tag.color} name={tag.name}/>)}
                </div>
            </div>
            <div className={style.activity_container__main}>
                <div className={style.main__left}>
                    {activityInfo?.image?<img className={style.left__img} 
                        src={activityInfo?.image} alt="activity pic" />:<div className={style.left__filler}></div>}
                </div>
                <div className={style.main__right}>
                    <div className={style.right__description}>
                        {activityInfo?.description}
                    </div>
                    <SendApplicationForm
                        applicationGlossary={activityApplicationGlossary}
                        communityId={activityInfo.communityId} 
                        activityType={activityInfo?.type} 
                        onAppStatusSubmit={onAppStatusSubmit}/>
                </div>
            </div>
            <div className={style.activity_container__contacts_and_links}>
                <div className={style.contacts_and_links__content}>
                    <h2 className={style.title}>Ссылки</h2>
                    <ul className={style.contacts_list}>
                        {activityInfo?.links.map(link => <li 
                            key={link.id} 
                            className={style.contacts_list__row}>
                                <ActivityContact id={link.id} 
                                    key={link.id} name={link.name} 
                                    contact={link.contact} 
                                    type={link.type}/>
                                    </li>)}
                    </ul>
                </div>
                <div className={style.contacts_and_links__content}>
                    <h2 className={style.title}>Контакты</h2>
                    <ul className={style.contacts_list}>
                        {activityInfo?.contacts.map(contact => <li  
                            key={contact.id} 
                            className={style.contacts_list__row}>
                                <ActivityContact id={contact.id} 
                                key={contact.id} 
                                name={contact.name} 
                                contact={contact.contact} 
                                type={contact.type}/></li>)}
                    </ul>
                </div>
            </div>
            <Carousel photos={activityInfo.photos}/>
        </section> 
        );
}

export default ActivityInfo;