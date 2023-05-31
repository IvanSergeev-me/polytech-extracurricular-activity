import { CommunityType, EventType } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";

export interface activitiyInfoState{
    isLoading: boolean;
    activity:CommunityType | EventType;
    appStatus:ActivityInfoApplicationStatus;
    error:string;
}
