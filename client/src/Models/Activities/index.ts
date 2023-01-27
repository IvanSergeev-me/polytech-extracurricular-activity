export enum activityTypeList{
    community = "community",
    event = "event",
}

export interface ITag{
    id:number,
    color:string,
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
    type:ContactType,
}

export interface IPhoto{  
    id:number,
    description:string,
    content:string,
}

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
}


export type ActivityType = activityTypeList.community | activityTypeList.event;

export type ContactType = 'link'|'contact';

export type TypeGlossary = Record<ActivityType, string>;

export type CommunityType = Activity & {communityId?:number}

export type CommunityTypeShort = Omit<CommunityType, "members_count"> & {description_short:string}

export type EventType = Activity & {date:string, time:string}

export const typeGlossary:TypeGlossary = {"community":"Сообщество", "event":"Мероприятие"};

