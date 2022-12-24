import { ActionsEnum, ActionList, authState } from "./types";

export let initialState:authState = {
    isLoading:false,
    isAuth:true,
    user:{id:0, name:"Иван",middlename:"Николаевич", lastname:"Сергеев",group:"191-361", activitiesMember:[1,3,5], role:"admin", login:"Sergeev"},
    error:"",
}

const authReducer = (state:authState = initialState , action: ActionList) => {
    
    switch (action.type) {
        case ActionsEnum.SET_LOADING:
            return { ...state, isLoading:action.isLoading }
        case ActionsEnum.SET_AUTH:
            return {...state, isAuth:action.isAuth}
        case ActionsEnum.SET_USER:
            return {...state, user:action.user}
        case ActionsEnum.SET_ERROR:
            return {...state, error:action.error_message, isLoading:false}
        default: return state;
    }
}

export default authReducer;