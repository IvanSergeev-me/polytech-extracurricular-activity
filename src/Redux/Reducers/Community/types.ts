//import { IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";

export enum ActionsEnum{
    SET_LOADING = "COMMUNITY/SET_LOADING",
    SET_COMMUNITY = "COMMUNITY/SET_ACTIVITY",
    SET_APP_STATUS = "COMMUNITY/SET_APP_STATUS",
    SET_ERROR = "COMMUNITY/SET_ERROR",
}

export interface communityState{
    isLoading: boolean;
    appStatus:ActivityInfoApplicationStatus;
    error:string;
}

export interface setLoadingAction{
    type:ActionsEnum.SET_LOADING;
    isLoading:boolean;
}

export interface setAppStatusAction{
    type:ActionsEnum.SET_APP_STATUS;
    appStatus:ActivityInfoApplicationStatus;
}


export interface setErrorAction{
    type:ActionsEnum.SET_ERROR;
    error_message:string;
}

export type ActionList = setLoadingAction | setAppStatusAction | setErrorAction;
