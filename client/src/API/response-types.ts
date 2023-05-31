import { CommunityType, EventType, IActivityCard } from 'Models/Activities';
import axios from 'axios';

export const instance = axios.create({
    baseURL:"http://polytech-extra-activities.ru/api/v1/",
});

export type ResponseType = {
    error:boolean,
    errorText:string,
}

export type GetActivitiesResponse = ResponseType & {
    data:IActivityCard[],
}

export type GetActivityInfoResponse = ResponseType & {
    data: CommunityType | EventType,
}
