import { CommunityTypeShort } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ICommunityPublication, ISubject } from "../../../Models/Community";
import { IMember } from "../../../Models/User";

export interface communityState{
    isLoading: boolean;
    appStatus:ActivityInfoApplicationStatus;
    error:string;
    community_name:string;
    members:IMember[];
    posts:ICommunityPublication[];
    schedule:ISubject[];
    info:CommunityTypeShort;
}