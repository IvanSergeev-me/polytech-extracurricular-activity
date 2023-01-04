import { IActivityCard } from "../../../Models/Activities";

export interface activitiesState{
    isLoading: boolean;
    error:string;
    activities:IActivityCard[];
    page:number;
}

