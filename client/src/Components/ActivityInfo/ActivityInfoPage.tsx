import React, {FC, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { selectActivity } from "../../Selectors";
import { ActivityInfoApplicationStatus } from "../../Models/ApplictationStatuses";
import { useActivityInfoActions, useAppDispatch } from "../../Hooks/useActions";
import { activityTypeList, CommunityType, EventType } from "../../Models/Activities/index";
import EventInfo from "./EventInfo/EventInfo";
import CommunityInfo from "./CommunityInfo/CommunityInfo";
import NotFoundPage from "Components/Common/NotFoundPage/NotFoundPage";
import { getActivityInfoThunk } from "Redux/Reducers/ActivityInfo/action-creators";

const ActivityInfo:FC = () => {
    
    let {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        
        // eslint-disable-next-line
        if(!id) id = "-1";
        let parsedId = parseInt(id, 10);
        if(!parsedId) parsedId = -1;

        dispatch(getActivityInfoThunk(parsedId));
    }, [dispatch]);

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