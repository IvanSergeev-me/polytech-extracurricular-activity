import { ICommunityInProfile, IEventInProfile, IUserRequest } from "../../../Models/Profile";
import { ActionsEnum, setCommunitiesAction , setEventsAction, setLoadingAction, setErrorAction, setRequestsAction} from "./types";

export const ProfileActionCreators = {
    setCommunities: (communities: ICommunityInProfile[]): setCommunitiesAction =>({type:ActionsEnum.SET_COMMUNITIES, communities}),
    setUserRequests: (userRequests:IUserRequest[]): setRequestsAction =>({type:ActionsEnum.SET_USER_REQUESTS, userRequests}),
    setEvents: (events: IEventInProfile[]): setEventsAction => ({type: ActionsEnum.SET_EVENTS, events}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: ActionsEnum.SET_LOADING, isLoading}),
    setError: (error_message: string): setErrorAction => ({type: ActionsEnum.SET_ERROR, error_message}),

}