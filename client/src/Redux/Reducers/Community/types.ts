import { RoleRightName } from './../../../Models/RolesAndRights/index';
import { CommunityTypeShort } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ICommunityPublication, IJoinRequest, ISubject } from "../../../Models/Community";
import { IMember } from "../../../Models/User";

export interface communityState{
    isLoading: boolean;
    appStatus:ActivityInfoApplicationStatus;
    userRights:RoleRightName[];
    error:string;
    community_name:string;
    members:IMember[];
    posts:ICommunityPublication[];
    schedule:ISubject[];
    info:CommunityTypeShort;
    joinRequests:IJoinRequest[];
}