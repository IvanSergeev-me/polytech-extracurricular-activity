//import { IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ICommunityPublication } from "../../../Models/Community";
import { IMember } from "../../../Models/User";

export enum ActionsEnum{
    SET_LOADING = "COMMUNITY/SET_LOADING",
    SET_COMMUNITY = "COMMUNITY/SET_ACTIVITY",
    SET_APP_STATUS = "COMMUNITY/SET_APP_STATUS",
    SET_ERROR = "COMMUNITY/SET_ERROR",
    SET_MEMBERS = "COMMUNITY/SET_MEMBERS",
    SET_POSTS = "COMMUNITY/SET_POSTS"
}

export interface communityState{
    isLoading: boolean;
    appStatus:ActivityInfoApplicationStatus;
    error:string;
    community_name:string;
    members:IMember[];
    posts:ICommunityPublication[];
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

export interface setErrorAction{
    type:ActionsEnum.SET_ERROR;
    error_message:string;
}

export type ActionList = setLoadingAction | setAppStatusAction | setErrorAction | setMembersAction | setPostsAction;
