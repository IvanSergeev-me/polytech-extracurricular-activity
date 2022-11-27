import { IUser } from "../../../Models/User";

export enum ActionsEnum{
    SET_LOADING = "AUTH/FETCH_LOADING",
    SET_AUTH = "AUTH/SET_AUTH",
    SET_USER = "AUTH/SET_USER",
    SET_ERROR = "AUTH/SET_ERROR"
}

export interface authState{
    isLoading: boolean;
    isAuth:boolean;
    user:IUser | null;
    error:string;
}

export interface setLoadingAction{
    type:ActionsEnum.SET_LOADING;
    isLoading:boolean;
}

export interface setErrorAction{
    type:ActionsEnum.SET_ERROR;
    error_message:string;
}

export interface setAuthAction{
    type: ActionsEnum.SET_AUTH;
    isAuth: boolean;
}

export interface setUserAction{
    type:ActionsEnum.SET_USER;
    user:IUser;
}

export type ActionList = setLoadingAction | setAuthAction | setUserAction | setErrorAction;

