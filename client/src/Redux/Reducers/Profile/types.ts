import { ICommunityInProfile, IEventInProfile, IUserRequest } from "../../../Models/Profile";

export interface profileState{
    isLoading: boolean;
    communities:ICommunityInProfile[];
    events:IEventInProfile[];
    userRequests:IUserRequest[]
    error:string;
}


