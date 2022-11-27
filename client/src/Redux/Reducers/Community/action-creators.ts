
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ActionsEnum, setAppStatusAction , setLoadingAction, setErrorAction, setMembersAction, setPostsAction} from "./types";
import { AppDispatch } from "../../redux-store";
import { IMember } from "../../../Models/User";
import { ICommunityPublication } from "../../../Models/Community";

export const CommunityActionCreators = {
    setAppStatus: (appStatus: ActivityInfoApplicationStatus): setAppStatusAction => ({type: ActionsEnum.SET_APP_STATUS, appStatus}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: ActionsEnum.SET_LOADING, isLoading}),
    setError: (error_message: string): setErrorAction => ({type: ActionsEnum.SET_ERROR, error_message}),
    setMembers: (members:IMember[]): setMembersAction => ({type: ActionsEnum.SET_MEMBERS, members}),
    setPosts:(posts:ICommunityPublication[]): setPostsAction => ({type:ActionsEnum.SET_POSTS, posts}),
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