import { ActionsEnum, ActionList, communityState } from "./types";

export let initialState:communityState = {
    isLoading:false,
    appStatus:"activityinfo/APPLICATION_ACCEPTED",
    error:"",
    community_name:"Музыкальное сообщество",
    members:[
        {id:0, name:"Иван", lastname:"Сергеев", image:"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec", roles:[
            {name:"Руководитель", rights:[{name:"canEditPost", canDo:true}]},
            {name:"Модератор", rights:[{name:"canEditPost", canDo:true},{name:"canEditSchedule", canDo:true}]},
            {name:"Преподаватель по гитаре", rights:[]},
        ]},
        {id:1, name:"Вадим", lastname:"Сидоров", image:"", roles:[
            {name:"Модератор", rights:[{name:"canEditPost", canDo:true},{name:"canEditSchedule", canDo:true}]},
        ]},
        {id:2, name:"Сергей", lastname:"Ларичев", image:"", roles:[
            {name:"Участник", rights:[]},
        ]},
    ],
    posts:[{id:0, images:[
            {id:0, image:"https://upload.wikimedia.org/wikipedia/commons/9/90/LogoMospolytech.jpg"},
            {id:1, image:"https://smapse.com/storage/2022/08/converted/825_585_1-10.png"},
            {id:2, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Polytechnic_Museum.jpg/1200px-Polytechnic_Museum.jpg"}], 
            title:"title1", text:"text1", authorId:1, date:"27.11.2022"},
        {id:1, images:[
            {id:0, image:"https://upload.wikimedia.org/wikipedia/commons/9/90/LogoMospolytech.jpg"},
            {id:1, image:"https://smapse.com/storage/2022/08/converted/825_585_1-10.png"},
            {id:2, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Polytechnic_Museum.jpg/1200px-Polytechnic_Museum.jpg"},
            {id:3, image:"https://www.m24.ru/b/d/nBkSUhL2gFkjkMqzPqzJrMCqzJ318Ji-miDHnvyDoGuQYX7XByXLjCdwu5tI-BaO-42NvWWBK8AqGfS8kjIzIymM8G1N_xHb1A=Q3mIk2GUXREtBeI2Dx6C9g.jpg"},
            {id:4, image:"https://archello.s3.eu-central-1.amazonaws.com/images/2020/04/17/DSC-5845-1.1587100243.7966.jpg"},], 
            title:"title2", text:"text2", authorId:1, date:"27.11.2022"}],
    schedule:[
        {id:0, name:"Занятие такое-то",audience:"Н-505", day:"Wed", time_start:"09:00", time_end:"10:30", date_start:"1 сен", date_end:"1 дек"},
        {id:1, name:"Занятие такое-то",audience:"Н-505", day:"Fri", time_start:"10:40", time_end:"12:10", date_start:"1 сен", date_end:"1 дек"},
        {id:3, name:"Занятие такое-то2",audience:"Н-505", day:"Wed", time_start:"12:20", time_end:"13:50", date_start:"1 сен", date_end:"1 дек"},
    ]
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
        case ActionsEnum.ADD_POST:
            return {...state, posts:[action.post, ...state.posts]}
        case ActionsEnum.ADD_SUBJECT:
            return {...state, schedule:[...state.schedule, action.subject]}
        case ActionsEnum.DELETE_SUBJECT:
            return {...state, schedule:state.schedule.filter(subject => subject.id !== action.id)}
        case ActionsEnum.DELETE_POST:
            return {...state}
            
        default: return state;
    }
}

export default communityReducer;