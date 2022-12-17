import { ICommunityInProfile, IEventInProfile } from "../../../Models/Profile";
import { ActionsEnum, setCommunitiesAction , setEventsAction, setLoadingAction, setErrorAction} from "./types";

export const ProfileActionCreators = {
    setCommunities: (communities: ICommunityInProfile[]): setCommunitiesAction =>({type:ActionsEnum.SET_COMMUNITIES, communities}),
    setEvents: (events: IEventInProfile[]): setEventsAction => ({type: ActionsEnum.SET_EVENTS, events}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: ActionsEnum.SET_LOADING, isLoading}),
    setError: (error_message: string): setErrorAction => ({type: ActionsEnum.SET_ERROR, error_message}),

}