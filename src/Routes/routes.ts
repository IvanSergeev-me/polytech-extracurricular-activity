import React from "react"
import ActivityInfo from "../Components/ActivityInfo/ActivityInfo";
import CommunityPage from "../Components/CommunityPage/CommunityPage";
import ExtracurricularActivities from "../Components/ExtracurricularActivities/ExtracurricularActivities";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";

export interface IRoute {
    path:string;
    element: React.ComponentType;
    exact?:boolean;
    id?:number;

}
export enum routeNames {
    HOME = "/",
    ACTIVITIES = "/Activities",
    ACTIVITY_INFO ="/Activities/:id",
    COMMUNITY_PAGE="/Community/:id",
    NO_MATCH = "*"
}

export const publicRoutes: IRoute[] = [
    //temp - need Login
    {path: routeNames.ACTIVITIES ,element:ExtracurricularActivities }
]

export const privateRoutes: IRoute[] = [
    {path: routeNames.HOME ,element:ExtracurricularActivities },
    {path: routeNames.ACTIVITIES ,element:ExtracurricularActivities },
    {path: routeNames.ACTIVITY_INFO ,element:ActivityInfo },
    {path: routeNames.COMMUNITY_PAGE ,element:CommunityPage },
    {path: routeNames.NO_MATCH, element:NotFoundPage}
]