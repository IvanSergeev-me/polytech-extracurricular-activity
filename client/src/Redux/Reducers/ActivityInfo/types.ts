import { IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";

export interface activitiyInfoState{
    isLoading: boolean;
    activity:IActivity;
    appStatus:ActivityInfoApplicationStatus;
    error:string;
}
