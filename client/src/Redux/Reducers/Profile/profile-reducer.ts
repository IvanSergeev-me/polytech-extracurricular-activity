import { IEventShortInfo } from "../../../Models/Profile";
import { ActionsEnum, ActionList, profileState } from "./types";

export let initialState:profileState = {
    isLoading:false,
    communities:[
        {id:0, name:"Музыкальное сообщество", date_start:"01.09.2022",
            image:"https://www.classicalmusicnews.ru/wp-content/uploads/2014/03/klassicheskaya-muzyika.jpg", roles:[{name:"Руководитель", rights:[
            {name:"canEditPost", canDo:true}, {name:"canEditSchedule", canDo:true}]}], status:"active"},
        {id:1, name:"Клуб настольных игр", date_start:"01.09.2022", 
            image:"https://www.ok-internet.ru/uploads/posts/2020-09/1599717397_50.jpg", roles:[{name:"Участник", rights:[]}], status:"active"}
    ],
    events:[
        {id:0, name:"Фестиваль первокурсника", date_visit:"10.09.2022", image:"", info:{
            date_visit:"10.09.2022",
            description:"Тут было такое то событие",
            members:[{id:0, name:"Иван", lastname:"Сергеев"}],
            name:"Фестиваль первокурсника"
        } as IEventShortInfo},
        {id:1, name:"Конференция от компании Selectel", date_visit:"11.11.2022", image:"https://cdn.selectel.ru/site/img/selectel.1d4a236.png", info:{
            date_visit:"10.09.2022",
            description:"Тут было такое то событие",
            members:[{id:0, name:"Иван", lastname:"Сергеев"}, {id:1, name:"Вадим", lastname:"Сидоров"}],
            name:"Конференция от компании Selectel"
        } as IEventShortInfo},
    ],
    error:"",
}

const profileReducer = (state:profileState = initialState , action: ActionList) => {
    switch (action.type) {
        case ActionsEnum.SET_LOADING:
            return { ...state, isLoading:action.isLoading }
        case ActionsEnum.SET_COMMUNITIES:
            return {...state, communities:action.communities}
        case ActionsEnum.SET_EVENTS:
            return {...state, events:action.events}
        case ActionsEnum.SET_ERROR:
            return {...state, error:action.error_message}
        default: return state;
    }
}

export default profileReducer;