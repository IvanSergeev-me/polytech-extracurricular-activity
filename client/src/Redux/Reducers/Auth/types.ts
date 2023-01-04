import { IUser } from "../../../Models/User";

export interface authState{
    isLoading: boolean;
    isAuth:boolean;
    user:IUser | null;
    error:string;
}