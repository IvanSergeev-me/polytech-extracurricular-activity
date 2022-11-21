import { IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ActionsEnum, setAppStatusAction , setLoadingAction, setErrorAction} from "./types";
import { AppDispatch } from "../../redux-store";

export const CommunityActionCreators = {
    setAppStatus: (appStatus: ActivityInfoApplicationStatus): setAppStatusAction => ({type: ActionsEnum.SET_APP_STATUS, appStatus}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: ActionsEnum.SET_LOADING, isLoading}),
    setError: (error_message: string): setErrorAction => ({type: ActionsEnum.SET_ERROR, error_message}),
    setAppStatusThunk: (payload:ActivityInfoApplicationStatus) => async (dispatch: AppDispatch) => {
        try {
            dispatch(CommunityActionCreators.setIsLoading(true));
            dispatch(CommunityActionCreators.setAppStatus(payload))
            dispatch(CommunityActionCreators.setIsLoading(false));
           
        } catch (e) {
            dispatch(CommunityActionCreators.setError('Произошла ошибка при отправке статуса заявки'))
        }
    },

}