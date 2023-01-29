import React from 'react'
import Carousel from '../../Common/OwlCarousel/OwlCarousel';
import { ActivityContacts } from '../ActivityContacts/ActivityContacts';
import { ActivityHeading } from '../ActivityHeading/ActivityHeading';
import { ActivityMain } from '../ActivityMain/ActivityMain';
import style from "../ActivityInfo.module.scss";
import { EventType } from '../../../Models/Activities';
import { ActivityInfoApplicationStatus } from '../../../Models/ApplictationStatuses';
import ActivityDate from '../../Common/ActivityDate/ActivityDate';
import { ActivityTags } from '../ActivityTags/ActivityTags';

type EventInfoProps = {activityInfo:EventType} & {onAppStatusSubmit:(payload:ActivityInfoApplicationStatus)=>void};

const EventInfo = (props:EventInfoProps) => {

    const activityInfo = props.activityInfo;

    return (
        <section className={style.activity_container}>
            <div className={style.activity_container__top}>
                <ActivityHeading members_count={activityInfo.members_count} name={activityInfo.name} />
                <ActivityDate time={activityInfo.time} date={activityInfo.date}/>
                <ActivityTags tags={activityInfo.tags}/>
            </div>
            <ActivityMain 
                onAppStatusSubmit={props.onAppStatusSubmit} 
                description={activityInfo.description} 
                image={activityInfo.image} 
                type={activityInfo.type} />
            <ActivityContacts contacts={activityInfo.contacts} links={activityInfo.links} />
            <Carousel photos={activityInfo.photos} />
        </section>
    )
}

export default EventInfo;
