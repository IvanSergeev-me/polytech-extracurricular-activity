import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ICommunityPublication, ISubject } from "../../../Models/Community";
import { IMember } from "../../../Models/User";
import { setAppStatusThunk } from "./action-creators";
import { communityState } from "./types";

export const initialState:communityState = {
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
    posts:[
        {id:0, images:[
            {id:0, image:"https://mospolytech.ru/upload/iblock/ee1/project2.jpg"},], 
            title:"title1", text:"text1", authorId:1, date:"27.11.2022"},
        {id:1, images:[
            {id:0, image:"https://smapse.ru/storage/2022/08/converted/825_585_1-10.png"},
            {id:1, image:"https://smapse.com/storage/2022/08/converted/825_585_1-10.png"}], 
            title:"title1", text:"text1", authorId:1, date:"27.11.2022"},
        {id:2, images:[
            {id:0, image:"https://upload.wikimedia.org/wikipedia/commons/9/90/LogoMospolytech.jpg"},
            {id:1, image:"https://smapse.com/storage/2022/08/converted/825_585_1-10.png"},
            {id:2, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Polytechnic_Museum.jpg/1200px-Polytechnic_Museum.jpg"}], 
            title:"title1", text:"text1", authorId:1, date:"27.11.2022"},
        {id:3, images:[
            {id:0, image:"https://upload.wikimedia.org/wikipedia/commons/9/90/LogoMospolytech.jpg"},
            {id:1, image:"https://smapse.com/storage/2022/08/converted/825_585_1-10.png"},
            {id:2, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Polytechnic_Museum.jpg/1200px-Polytechnic_Museum.jpg"},
            {id:3, image:"https://www.m24.ru/b/d/nBkSUhL2gFkjkMqzPqzJrMCqzJ318Ji-miDHnvyDoGuQYX7XByXLjCdwu5tI-BaO-42NvWWBK8AqGfS8kjIzIymM8G1N_xHb1A=Q3mIk2GUXREtBeI2Dx6C9g.jpg"},
            {id:4, image:"https://archello.s3.eu-central-1.amazonaws.com/images/2020/04/17/DSC-5845-1.1587100243.7966.jpg"},], 
            title:"title2", text:"text2", authorId:1, date:"27.11.2022"},
        ],
    schedule:[
        {id:0, name:"Занятие такое-то",audience:"Н-505", day:"Wed", time_start:"09:00", time_end:"10:30", date_start:"1 сен", date_end:"1 дек"},
        {id:1, name:"Занятие такое-то",audience:"Н-505", day:"Fri", time_start:"10:40", time_end:"12:10", date_start:"1 сен", date_end:"1 дек"},
        {id:3, name:"Занятие такое-то2",audience:"Н-505", day:"Wed", time_start:"12:20", time_end:"13:50", date_start:"1 сен", date_end:"1 дек"},
    ]
}

export const communitySlice = createSlice({
    name:"communitySlice",
    initialState:initialState,
    reducers:{
        setIsLoading(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setError(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        setAppStatus(state, action:PayloadAction<ActivityInfoApplicationStatus>){
            state.appStatus = action.payload;
        },
        setMembers(state, action:PayloadAction<IMember[]>){
            state.members = action.payload;
        },
        setSchedule(state, action:PayloadAction<ISubject[]>){
            state.schedule = action.payload;
        },
        setPosts(state, action:PayloadAction<ICommunityPublication[]>){
            state.posts = action.payload;
        },
        addPost(state, action:PayloadAction<ICommunityPublication>){
            state.posts = [action.payload, ...state.posts];
        },
        addSubject(state, action:PayloadAction<ISubject>){
            
            const max = state.schedule.reduce((prev, current) => (prev.id > current.id) ? prev : current);
            const newId = max.id + 1;
            const newSubject = {...action.payload, id:newId} as ISubject
            state.schedule =  [ ...state.schedule, newSubject];
        },
        deleteSubject(state, action:PayloadAction<number>){
            state.schedule = state.schedule.filter(subject => subject.id !== action.payload);
        },
        deletePost(state, action:PayloadAction<number>){
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    },
    extraReducers:{
        [setAppStatusThunk.fulfilled.type]:(state, action:PayloadAction<ActivityInfoApplicationStatus>)=>{
            state.appStatus = action.payload;
            state.error = "";
            state.isLoading = false;
        },
        [setAppStatusThunk.pending.type]:(state, action)=>{
            state.isLoading = true;
        },
        [setAppStatusThunk.rejected.type]:(state, action:PayloadAction<string>)=>{
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})

export default communitySlice.reducer;