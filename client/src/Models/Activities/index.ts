export interface IActivityCard{
    id:number,
    type:string,
    name:string,
    image: string,
    description:string,
    tags:ITag[],
}

export interface IActivity{
    id:number,
    type:ActivityType,
    image: string,
    name:string,
    tags:ITag[],
    members_count:number,
    description:string,
    links:IContact[],
    contacts:IContact[],
    photos:IPhoto[],
    communityId?:number,
    date?:string,
    time?:string
}

export type Activity = {
    id:number,
    type:ActivityType,
    image: string,
    name:string,
    tags:ITag[],
    members_count:number,
    description:string,
    links:IContact[],
    contacts:IContact[],
    photos:IPhoto[],
    date?:string,
    time?:string
}

export type ActivityType = 'event'|'community';

export type Community = Activity & {communityId?:number}

export type Event = Activity & {date:string, time:string}

export interface ITag{
    id:number,
    color?:string,
    name:string,
}

export interface ILink{
    id:number,
    name:string,
    link:string,
}

export interface IContact{
    id:number,
    name:string,
    contact:string,
    type:'link'|'contact',
}

export interface IPhoto{  
    id:number,
    description:string,
    content:string,
}