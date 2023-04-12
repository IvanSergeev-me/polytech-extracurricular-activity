import React, {FC} from "react";
//import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { selectActivity } from "../../Selectors";
import { ActivityInfoApplicationStatus } from "../../Models/ApplictationStatuses";
import { useActivityInfoActions } from "../../Hooks/useActions";
import { activityTypeList, CommunityType, EventType } from "../../Models/Activities/index";
import EventInfo from "./EventInfo/EventInfo";
import CommunityInfo from "./CommunityInfo/CommunityInfo";
import NotFoundPage from "Components/Common/NotFoundPage/NotFoundPage";

const ActivityInfo:FC = () => {
    //let params = useParams();

    const activityInfo = useTypedSelector(selectActivity);
    
    const {setAppStatus} = useActivityInfoActions();

    const onAppStatusSubmit = (payload:ActivityInfoApplicationStatus) =>{
        setAppStatus(payload);
    }

    switch(activityInfo.type){
        case activityTypeList.event:
            return <EventInfo activityInfo={activityInfo as EventType} onAppStatusSubmit={onAppStatusSubmit}/>
        case activityTypeList.community:
            return <CommunityInfo activityInfo={activityInfo as CommunityType} onAppStatusSubmit={onAppStatusSubmit}/>
        default: return <NotFoundPage />
    }
}

export default ActivityInfo;