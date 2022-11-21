import { ActionsEnum, ActionList, communityState } from "./types";

export let initialState:communityState = {
    isLoading:false,
    appStatus:"actioninfo/APPLICATION_ACCEPTED",
    error:"",
}

const communityReducer = (state:communityState = initialState , action: ActionList) => {
    switch (action.type) {
        case ActionsEnum.SET_LOADING:
            return { ...state, isLoading:action.isLoading }
        case ActionsEnum.SET_APP_STATUS:
            return {...state, appStatus:action.appStatus}
        case ActionsEnum.SET_ERROR:
            return {...state, error:action.error_message}
        default: return state;
    }
}

export default communityReducer;