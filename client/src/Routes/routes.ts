import React from "react"
import ActivityInfo from "../Components/ActivityInfo/ActivityInfoPage";
import CommunityPage from "../Components/CommunityPage/CommunityPage";
import CommunityPosts from "../Components/CommunityPage/CommunityPosts/CommunityPosts";
import CommunitySchedule from "../Components/CommunityPage/CommunitySchedule/CommunitySchedule";
import ExtracurricularActivities from "../Components/ExtracurricularActivities/ExtracurricularActivities";
import Login from "../Components/Login/Login";
import NotFoundPage from "../Components/Common/NotFoundPage/NotFoundPage";
import Profile from "../Components/Profile/Profile";
import ProfileAdmin from "../Components/Profile/ProfileAdmin/ProfileAdmin";
import ProfileMain from "../Components/Profile/ProfileMain/ProfileMain";
import ProfileLinks from "../Components/Profile/ProfileLinks/ProfileLinks";
import ProfileStatistics from "../Components/Profile/ProfileStatistics/ProfileStatistics";
import CommunitySettings from "../Components/CommunityPage/CommunitySettings/CommunitySettings";
import CommunityJoinRequests from "../Components/CommunityPage/CommunityJoinRequests/CommunityJoinRequests";
import CommunityRoles from "../Components/CommunityPage/CommunityRoles/CommunityRoles";

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
    PROFILE="/Profile/*",
    NO_MATCH = "*"
}

export enum communityRouteNames {
    POSTS = "/",
    SCHEDULE= "/schedule",
    SETTINGS = "/settings",
    REQUESTS = "/requests",
    EDITROLES = "/edit-roles",
    NO_MATCH = "*",
    
}

export enum profileRouteNames {
    MAIN = "/",
    STAT= "/statistics",
    LINKS = "/links",
    ADMIN = "/admin",
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
    {path: routeNames.PROFILE, element:Profile},
    {path: routeNames.NO_MATCH, element:NotFoundPage}
]

export const communityRoutes:IRoute[] = [
    {path:communityRouteNames.POSTS, element:CommunityPosts},
    {path:communityRouteNames.SCHEDULE, element:CommunitySchedule},
    {path:communityRouteNames.SETTINGS, element:CommunitySettings},
    {path:communityRouteNames.REQUESTS, element:CommunityJoinRequests},
    {path:communityRouteNames.EDITROLES, element:CommunityRoles},
    {path:communityRouteNames.NO_MATCH, element:NotFoundPage},
]

export const profileRoutes:IRoute[] = [
    {path:profileRouteNames.MAIN, element:ProfileMain},
    {path:profileRouteNames.STAT, element:ProfileStatistics},
    {path:profileRouteNames.LINKS, element:ProfileLinks},
    {path:profileRouteNames.ADMIN, element:ProfileAdmin},
    {path:profileRouteNames.NO_MATCH, element:NotFoundPage},
]