import { ActivityType, IPhoto } from "../Activities";
import { ICommunityRole } from "../RolesAndRights";
import { IMemberShort } from "../User";

export interface ICommunityInProfile {
    id: number;
    name: string;
    roles: ICommunityRole[];
    date_start: string;
    status: CommunityStatus;
    image: string;
}

export interface IEventInProfile {
    id: number;
    name: string;
    image: string;
    date_visit: string;
    creatorId: number,
    info: IEventShortInfo;
}

export interface IEventShortInfo {
    name: string;
    date_visit: string;
    description: string;
    members: IMemberShort[];
    location: string;
}

export interface IUserRequest {
    id: number;
    name: string;
    type: ActivityType;
    date: string;
    info: IEventInfo | ICommunityInfo;
}

export interface IEventInfo {
    id: number;
    name: string;
}

export interface ICommunityInfo {
    id: number;
    name: string;
    direction: string;
    targets: string;
    folder_link: string;
    isNeedAudience: boolean;
    authorName: string;
    authorLastname: string;
    authorGroup: string;
    date: string;
}

export type AchievementInfo = {
    achievementCards: IAchievementCard[];
    achievementInfo: IAchievementInfo | null;
}

export interface IAchievementCard {
    id: number;
    cardName: string;
    cardImage: string;
}

export interface IAchievementInfo {
    achievementId: number;
    name: string;
    image: string;
    description: string;
    photos: IPhoto;
}

export interface IStatistics {
    classesVisited: number;
    eventsVisited: number;
    favoriteCommunity: string;
    favoriteEvent: string;
    postsPublicated: number;
}

export interface IActivityGraphData{
    activityIndex:number;
    dayName:string;
}

export type CommunityStatus = "active" | "non_active";

export type CommunityStatusGlossary = Record<CommunityStatus, string>;

export type StatisticsGlossary = Record<keyof IStatistics, string>;

export const statisticsGlossary: StatisticsGlossary = {
    classesVisited: "Занятий посещено",
    eventsVisited: "Мероприятий посещено",
    favoriteCommunity: "Любимое сообщество",
    favoriteEvent: "Любимое мероприятие",
    postsPublicated: "Записей опубликовано",
}

export const communityStatusGlossary: CommunityStatusGlossary = { "active": "Активно", "non_active": "Не активно" }
