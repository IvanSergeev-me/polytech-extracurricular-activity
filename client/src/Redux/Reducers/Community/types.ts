//import { IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ICommunityPublication, ISubject } from "../../../Models/Community";
import { IMember } from "../../../Models/User";

export enum ActionsEnum{
    SET_LOADING = "COMMUNITY/SET_LOADING",
    SET_COMMUNITY = "COMMUNITY/SET_ACTIVITY",
    SET_APP_STATUS = "COMMUNITY/SET_APP_STATUS",
    SET_ERROR = "COMMUNITY/SET_ERROR",
    SET_MEMBERS = "COMMUNITY/SET_MEMBERS",
    SET_POSTS = "COMMUNITY/SET_POSTS",
    SET_SCHEDULE = "COMMUNITY/SET_SCHEDULE",
    ADD_POST = "COMMUNITY/ADD_POST",
    ADD_SUBJECT = "COMMUNITY/ADD_SUBJECT",
    DELETE_SUBJECT = "COMMUNITY/DELETE_SUBJECT",
    DELETE_POST = "COMMUNITY/DELETE_POST",
}

export interface communityState{
    isLoading: boolean;
    appStatus:ActivityInfoApplicationStatus;
    error:string;
    community_name:string;
    members:IMember[];
    posts:ICommunityPublication[];
    schedule:ISubject[];
}

export interface setLoadingAction{
    type:ActionsEnum.SET_LOADING;
    isLoading:boolean;
}

export interface setMembersAction{
    type:ActionsEnum.SET_MEMBERS;
    members:IMember[];
}

export interface setAppStatusAction{
    type:ActionsEnum.SET_APP_STATUS;
    appStatus:ActivityInfoApplicationStatus;
}

export interface setPostsAction{
    type:ActionsEnum.SET_POSTS;
    posts:ICommunityPublication[];
}

export interface addPostAction{
    type:ActionsEnum.ADD_POST;
    post:ICommunityPublication;
}

export interface setErrorAction{
    type:ActionsEnum.SET_ERROR;
    error_message:string;
}

export interface setScheduleAction{
    type:ActionsEnum.SET_SCHEDULE;
    schedule:ISubject[];
}

export interface addSubjectAction{
    type:ActionsEnum.ADD_SUBJECT;
    subject:ISubject;
}

export interface deleteSubjectAction{
    type:ActionsEnum.DELETE_SUBJECT;
    id:number
}

export interface deletePostAction{
    type:ActionsEnum.DELETE_POST;
    id:number;
}

export type ActionList = 
    setLoadingAction |
    setAppStatusAction |
    setErrorAction |
    setMembersAction | 
    setPostsAction | 
    addPostAction | 
    setScheduleAction | 
    addSubjectAction |
    deleteSubjectAction |
    deletePostAction;
