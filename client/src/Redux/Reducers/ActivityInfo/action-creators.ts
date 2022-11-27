import { IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ActionsEnum, setAppStatusAction , setActivityAction, setLoadingAction, setErrorAction} from "./types";
import { AppDispatch } from "../../redux-store";

export const ActivityInfoActionCreators = {
    setActivity: (activity: IActivity): setActivityAction =>({type:ActionsEnum.SET_ACTIVITY, activity}),
    setAppStatus: (appStatus: ActivityInfoApplicationStatus): setAppStatusAction => ({type: ActionsEnum.SET_APP_STATUS, appStatus}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: ActionsEnum.SET_LOADING, isLoading}),
    setError: (error_message: string): setErrorAction => ({type: ActionsEnum.SET_ERROR, error_message}),
    setAppStatusThunk: (payload:ActivityInfoApplicationStatus) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ActivityInfoActionCreators.setIsLoading(true));
            dispatch(ActivityInfoActionCreators.setAppStatus(payload))
            dispatch(ActivityInfoActionCreators.setIsLoading(false));
           
        } catch (e) {
            dispatch(ActivityInfoActionCreators.setError('Произошла ошибка при отправке статуса заявки'))
        }
    },

}