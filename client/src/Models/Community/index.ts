import { DayType } from "../TimeAndDate"

export interface ICommunityPublication {
    id:number,
    images?: IPublicationImage[],
    title:string,
    text:string,
    date:string,
    authorId:number
}

export interface IPublicationImage {
    id:number,
    image:string,
}

export interface ISubject {
    id:number,
    name:string,
    day:DayType,
    time_start:string,
    time_end:string,
    audience:string,
    date_start:string,
    date_end:string,

    time_range?:string[];
    date_range?:string[];
}