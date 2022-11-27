import React from "react"
import ActivityInfo from "../Components/ActivityInfo/ActivityInfo";
import CommunityPage from "../Components/CommunityPage/CommunityPage";
import CommunityPosts from "../Components/CommunityPage/CommunityPosts/CommunityPosts";
import CommunitySchedule from "../Components/CommunityPage/CommunitySchedule/CommunitySchedule";
import ExtracurricularActivities from "../Components/ExtracurricularActivities/ExtracurricularActivities";
import Login from "../Components/Login/Login";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";

export interface IRoute {
    path:string;
    element: React.ComponentType;
    exact?:boolean;
    id?:number;

}

export enum routeNames {
    LOGIN = "/Login",
    HOME = "/",
    ACTIVITIES = "/Activities",
    ACTIVITY_INFO ="/Activities/:id",
    COMMUNITY_PAGE="/Community/:id/*",
    NO_MATCH = "*"
}

export enum communityRouteNames {
    POSTS = "/",
    SCHEDULE= "/Schedule",
    NO_MATCH = "*"
}

export const publicRoutes: IRoute[] = [
    {path: routeNames.HOME ,element:Login },
    {path: routeNames.NO_MATCH ,element:Login },
]

export const privateRoutes: IRoute[] = [
    {path: routeNames.HOME ,element:ExtracurricularActivities },
    {path: routeNames.ACTIVITIES ,element:ExtracurricularActivities },
    {path: routeNames.ACTIVITY_INFO ,element:ActivityInfo },
    {path: routeNames.COMMUNITY_PAGE ,element:CommunityPage },
    {path: routeNames.NO_MATCH, element:NotFoundPage}
]

export const communityRoutes:IRoute[] = [
    {path:communityRouteNames.POSTS, element:CommunityPosts},
    {path:communityRouteNames.SCHEDULE, element:CommunitySchedule},
]