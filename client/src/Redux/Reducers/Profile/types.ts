import { AchievementInfo, IActivityGraphData, ICommunityInProfile, IEventInProfile, IStatistics, IUserRequest } from "../../../Models/Profile";

export interface profileState{
    isLoading: boolean;
    communities:ICommunityInProfile[];
    events:IEventInProfile[];
    userRequests:IUserRequest[];
    achievements:AchievementInfo;
    statistics:IStatistics;
    activityGraphData:IActivityGraphData[];
    error:string;
}


