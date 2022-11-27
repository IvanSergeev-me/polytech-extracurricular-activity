import { IActivity } from "../../../Models/Activities";
import { ActionsEnum, setActivitiesAction, setLoadingAction, setPageAction } from "./types";

export const ActivitiesActionCreators = {
    fetchLoading: (isLoading:boolean): setLoadingAction => ({type:ActionsEnum.SET_LOADING, isLoading}),
    setActivities: (activities:IActivity[]):setActivitiesAction => ({type:ActionsEnum.SET_ACTIVITIES, activities}),
    setPage:(page:number):setPageAction =>({type:ActionsEnum.SET_PAGE, page}),
}