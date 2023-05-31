import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { activitiesSlice } from "../Redux/Reducers/Activities/activities-reducer";
import { activityInfoSlice } from "../Redux/Reducers/ActivityInfo/activityInfo-reducer";
import { authSlice } from "../Redux/Reducers/Auth/auth-reducer";
import { communitySlice } from "../Redux/Reducers/Community/community-reducer";
import { profileSlice } from "../Redux/Reducers/Profile/profile-reducer";
import { AppDispatch } from "../Redux/redux-store";
import { eventSlice } from "Redux/Reducers/Event/event-reducer";

export const useAppDispatch = () =>{
    const dispatch = useDispatch<AppDispatch>();
    return dispatch;
}

export const useAuthActions = () =>{
    const dispatch = useAppDispatch();
    const actions = authSlice.actions;
    return bindActionCreators(actions , dispatch);
}

export const useActivitiesActions = () =>{
    const dispatch = useAppDispatch();
    const actions = activitiesSlice.actions;
    return bindActionCreators(actions , dispatch);
}

export const useActivityInfoActions = () =>{
    const dispatch = useAppDispatch();
    const actions = activityInfoSlice.actions;
    return bindActionCreators(actions, dispatch);
}

export const useCommunityActions = () =>{
    const dispatch = useAppDispatch();
    const actions = communitySlice.actions;
    return bindActionCreators(actions , dispatch);
}

export const useEventActions = () =>{
    const dispatch = useAppDispatch();
    const actions = eventSlice.actions;
    return bindActionCreators(actions , dispatch);
}

export const useProfileActions = () =>{
    const dispatch = useAppDispatch();
    const actions = profileSlice.actions;
    return bindActionCreators(actions , dispatch);
}

