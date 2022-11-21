import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { ActivitiesActionCreators } from "../Redux/Reducers/Activities/action-creators";
import { ActivityInfoActionCreators } from "../Redux/Reducers/ActivityInfo/action-creators";
import { AuthActionCreators } from "../Redux/Reducers/Auth/action-creators";
import { AppDispatch } from "../Redux/redux-store";

export const useAuthActions = () =>{
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(AuthActionCreators , dispatch);
}

export const useActivitiesActions = () =>{
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(ActivitiesActionCreators , dispatch);
}

export const useActivityInfoActions = () =>{
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(ActivityInfoActionCreators , dispatch);
}