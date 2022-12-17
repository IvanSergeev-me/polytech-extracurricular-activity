import { ICommunityInProfile, IEventInProfile } from "../../../Models/Profile";


export enum ActionsEnum{
    SET_COMMUNITIES = "PROFILE/SET_COMMUNITITES",
    SET_EVENTS = "PROFILE/SET_ACTIVITY",
    SET_LOADING = "PROFILE/SET_LOADING",
    SET_ERROR = "PROFILE/SET_ERROR",
}

export interface profileState{
    isLoading: boolean;
    communities:ICommunityInProfile[];
    events:IEventInProfile[];
    error:string;
}

export interface setLoadingAction{
    type:ActionsEnum.SET_LOADING;
    isLoading:boolean;
}

export interface setEventsAction{
    type:ActionsEnum.SET_EVENTS;
    events:IEventInProfile[];
}

export interface setCommunitiesAction{
    type:ActionsEnum.SET_COMMUNITIES;
    communities:ICommunityInProfile[];
}

export interface setErrorAction{
    type:ActionsEnum.SET_ERROR;
    error_message:string;
}

export type ActionList = setEventsAction | setCommunitiesAction | setLoadingAction | setErrorAction;
