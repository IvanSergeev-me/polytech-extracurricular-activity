import { ValueOf } from "Assets/Utils/ValueOf";

export enum activityTypeList{
    community = "community",
    event = "event",
}

export const ActivityTypeList = {
    community:"community",
    event:"event",
} as const;

export type ActivityType = ValueOf<typeof ActivityTypeList>;

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

export type getActivitiesParams = {
    page:number,
    size:number,
}

export type ContactType = 'link'|'contact';

export type TypeGlossary = Record<ActivityType, string>;

export type CommunityType = Activity & {communityId?:number}

export type CommunityTypeShort = Omit<CommunityType, "members_count"> & {description_short:string}

export type EventType = Activity & {date:string, time:string}

export type EventTypeShort = Omit<EventType, "members_count"> & {description_short:string, creatorId:number}

export type AllActivityType = EventType | CommunityType;

export const typeGlossary:TypeGlossary = {"community":"Сообщество", "event":"Мероприятие"};

