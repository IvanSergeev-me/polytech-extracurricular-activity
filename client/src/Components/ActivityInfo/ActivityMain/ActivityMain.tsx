import React from 'react';
import { ActivityType } from '../../../Models/Activities';
import { activityApplicationGlossary, ActivityInfoApplicationStatus } from '../../../Models/ApplictationStatuses';
import style from "../ActivityInfo.module.scss";
import SendApplicationForm from '../SendApplicationForm/SendApplicationForm';

type ActivityMainProps = {
    image:string, 
    description:string, 
    type:ActivityType, 
    communityId?:number, 
    onAppStatusSubmit:(payload:ActivityInfoApplicationStatus)=>void}

export const ActivityMain = ({image, description,communityId,onAppStatusSubmit,type}:ActivityMainProps) => {
  return (
    <div className={style.activity_container__main}>
        <div className={style.main__left}>
            {image?<img className={style.left__img} 
                src={image} alt="activity pic" />:
                <div className={style.left__filler}></div>}
        </div>
        <div className={style.main__right}>
            <div className={style.right__description}>
                {description}
            </div>
            <SendApplicationForm
                applicationGlossary={activityApplicationGlossary}
                communityId={communityId} 
                activityType={type} 
                onAppStatusSubmit={onAppStatusSubmit}/>
        </div>
    </div>
  )
}
