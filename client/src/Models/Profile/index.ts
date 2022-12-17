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
    members:IMemberShort[]
} 

export type CommunityStatus = "active" | "non_active";

export type CommunityStatusGlossary = Record<CommunityStatus, string>;

export const communityStatusGlossary:CommunityStatusGlossary = {"active":"Активно", "non_active":"Не активно"}
