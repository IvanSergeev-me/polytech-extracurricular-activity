import { GetActivitiesResponse, GetActivityInfoResponse, instance } from './response-types';

export const ActivitiesApi = {
    getActivityCards(page:number, size:number){
        return instance.get<GetActivitiesResponse>(`activities`, {params:{page, size}});
    }, 
    getActivityInfo(activity_id:number){
        return instance.get<GetActivityInfoResponse>(`activities/${activity_id}`);
    }
};