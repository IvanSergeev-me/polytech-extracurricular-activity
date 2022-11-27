import { IActivityCard } from "../../../Models/Activities";

export enum ActionsEnum{
    SET_LOADING = "ACTIVITIES/SET_LOADING",
    SET_ACTIVITIES = "ACTIVITIES/SET_ACTIVITIES",
    SET_PAGE = "ACTIVITIES/SET_PAGE",
}

export interface activitiesState{
    isLoading: boolean;
    activities:IActivityCard[];
    page:number;
}

export interface setLoadingAction{
    type:ActionsEnum.SET_LOADING;
    isLoading:boolean;
}

export interface setPageAction{
    type:ActionsEnum.SET_PAGE;
    page:number;
}

export interface setActivitiesAction{
    type:ActionsEnum.SET_ACTIVITIES;
    activities:IActivityCard[];
}

export type ActionList = setLoadingAction | setActivitiesAction |setPageAction;

