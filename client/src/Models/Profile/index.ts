import { ActivityType } from "../Activities";
import { ICommunityRole } from "../RolesAndRights";
import { IMemberShort } from "../User";

export interface ICommunityInProfile {
    id:number;
    name:string;
    roles:ICommunityRole[];
    date_start:string;
    status:CommunityStatus;
    image:string;
}

export interface IEventInProfile {
    id:number;
    name:string;
    image:string;
    date_visit:string;
    info:IEventShortInfo;
}

export interface IEventShortInfo {
    name:string;
    date_visit:string;
    description:string;
    members:IMemberShort[];
    location:string;
}

export interface IUserRequest {
    id:number;
    name:string;
    type:ActivityType;
    date:string;
    info:IEventInfo | ICommunityInfo;
}

export interface IEventInfo{
    id:number;
    name:string;
}

export interface ICommunityInfo{
    id:number;
    name:string;
    direction:string;
    targets:string;
    folder_link:string;
    isNeedAudience:boolean;
    authorName:string;
    authorLastname:string;
    authorGroup:string;
    date:string;
}

export type CommunityStatus = "active" | "non_active";

export type CommunityStatusGlossary = Record<CommunityStatus, string>;

export const communityStatusGlossary:CommunityStatusGlossary = {"active":"Активно", "non_active":"Не активно"}
