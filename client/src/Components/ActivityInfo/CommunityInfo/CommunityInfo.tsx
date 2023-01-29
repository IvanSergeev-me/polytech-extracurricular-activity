import React from 'react'
import Carousel from '../../Common/OwlCarousel/OwlCarousel';
import { ActivityContacts } from '../ActivityContacts/ActivityContacts';
import { ActivityHeading } from '../ActivityHeading/ActivityHeading';
import { ActivityMain } from '../ActivityMain/ActivityMain';
import style from "../ActivityInfo.module.scss";
import { CommunityType } from '../../../Models/Activities';
import { ActivityInfoApplicationStatus } from '../../../Models/ApplictationStatuses';
import { ActivityTags } from '../ActivityTags/ActivityTags';

type CommunityInfoProps = {activityInfo:CommunityType} & {onAppStatusSubmit:(payload:ActivityInfoApplicationStatus)=>void};

const CommunityInfo = (props:CommunityInfoProps) => {

    const activityInfo = props.activityInfo;

    return (
        <section className={style.activity_container}>
            <div className={style.activity_container__top}>
                <ActivityHeading members_count={activityInfo.members_count} name={activityInfo.name} />
                <ActivityTags tags={activityInfo.tags}/>
            </div>
            <ActivityMain 
                onAppStatusSubmit={props.onAppStatusSubmit} 
                communityId={activityInfo.communityId!} 
                description={activityInfo.description} 
                image={activityInfo.image} 
                type={activityInfo.type} />
            <ActivityContacts contacts={activityInfo.contacts} links={activityInfo.links} />
            <Carousel photos={activityInfo.photos} />
        </section>
    )
}

export default CommunityInfo;
