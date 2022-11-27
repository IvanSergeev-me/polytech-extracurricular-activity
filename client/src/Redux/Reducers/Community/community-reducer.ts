import { ActionsEnum, ActionList, communityState } from "./types";

export let initialState:communityState = {
    isLoading:false,
    appStatus:"activityinfo/APPLICATION_ACCEPTED",
    error:"",
    community_name:"Музыкальное сообщество",
    members:[
        {id:0, name:"Иван", lastname:"Сергеев", image:"", roles:[
            {name:"Руководитель", rights:[{name:"canCreatePost", canDo:true}]}
        ]}
    ],
    posts:[{id:0, images:[], title:"title1", text:"text1", authorId:1, date:"27.11.2022"},
    {id:1, images:[], title:"title2", text:"text2", authorId:1, date:"27.11.2022"}]
}

const communityReducer = (state:communityState = initialState , action: ActionList) => {
    switch (action.type) {
        case ActionsEnum.SET_LOADING:
            return { ...state, isLoading:action.isLoading }
        case ActionsEnum.SET_APP_STATUS:
            return {...state, appStatus:action.appStatus}
        case ActionsEnum.SET_ERROR:
            return {...state, error:action.error_message}
        case ActionsEnum.SET_MEMBERS:
            return {...state, members:action.members}
        case ActionsEnum.SET_POSTS:
            return {...state, posts:action.posts}
        default: return state;
    }
}

export default communityReducer;