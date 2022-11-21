import { IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";

export enum ActionsEnum{
    SET_LOADING = "ACTIVITY/SET_LOADING",
    SET_ACTIVITY = "ACTIVITY/SET_ACTIVITY",
    SET_APP_STATUS = "ACTIVITY/SET_APP_STATUS",
    SET_ERROR = "ACTIVITY/SET_ERROR",
}

export interface activitiyInfoState{
    isLoading: boolean;
    activity:IActivity;
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

export interface setActivityAction{
    type:ActionsEnum.SET_ACTIVITY;
    activity:IActivity;
}

export interface setErrorAction{
    type:ActionsEnum.SET_ERROR;
    error_message:string;
}

export type ActionList = setLoadingAction | setActivityAction | setAppStatusAction | setErrorAction;
