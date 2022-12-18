import { ICommunityInProfile, IEventInProfile, IUserRequest } from "../../../Models/Profile";


export enum ActionsEnum{
    SET_COMMUNITIES = "PROFILE/SET_COMMUNITITES",
    SET_EVENTS = "PROFILE/SET_ACTIVITY",
    SET_LOADING = "PROFILE/SET_LOADING",
    SET_ERROR = "PROFILE/SET_ERROR",
    SET_USER_REQUESTS = "PROFILE/SET_USER_REQUESTS",
}

export interface profileState{
    isLoading: boolean;
    communities:ICommunityInProfile[];
    events:IEventInProfile[];
    userRequests:IUserRequest[]
    error:string;
}

export interface setLoadingAction{
    type:ActionsEnum.SET_LOADING;
    isLoading:boolean;
}

export interface setRequestsAction{
    type:ActionsEnum.SET_USER_REQUESTS;
    userRequests:IUserRequest[];
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

export type ActionList = setEventsAction | setCommunitiesAction | setLoadingAction | setErrorAction | setRequestsAction;
