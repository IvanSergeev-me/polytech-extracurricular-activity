
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ActionsEnum, setAppStatusAction , setLoadingAction,
    setErrorAction, setMembersAction, setPostsAction, addPostAction, setScheduleAction, addSubjectAction, deleteSubjectAction, deletePostAction} from "./types";
import { AppDispatch } from "../../redux-store";
import { IMember } from "../../../Models/User";
import { ICommunityPublication, ISubject } from "../../../Models/Community";

export const CommunityActionCreators = {
    setAppStatus: (appStatus: ActivityInfoApplicationStatus): setAppStatusAction => ({type: ActionsEnum.SET_APP_STATUS, appStatus}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: ActionsEnum.SET_LOADING, isLoading}),
    setError: (error_message: string): setErrorAction => ({type: ActionsEnum.SET_ERROR, error_message}),
    setMembers: (members:IMember[]): setMembersAction => ({type: ActionsEnum.SET_MEMBERS, members}),
    setSchedule:(schedule:ISubject[]): setScheduleAction => ({type: ActionsEnum.SET_SCHEDULE, schedule}),
    setPosts:(posts:ICommunityPublication[]): setPostsAction => ({type:ActionsEnum.SET_POSTS, posts}),
    addPost:(post:ICommunityPublication):addPostAction => ({type:ActionsEnum.ADD_POST, post}),
    addSubject:(subject:ISubject):addSubjectAction => ({type:ActionsEnum.ADD_SUBJECT, subject}),
    deleteSubject:(id:number):deleteSubjectAction => ({type:ActionsEnum.DELETE_SUBJECT, id}),
    deletePost:(id:number):deletePostAction => ({type:ActionsEnum.DELETE_POST, id}),
    
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