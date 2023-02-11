import { IJoinRequest } from './../../../Models/Community/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activityTypeList, CommunityTypeShort } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { ICommunityPublication, ISubject } from "../../../Models/Community";
import { IMember } from "../../../Models/User";
import { setAppStatusThunk, setJoinRequestsThunk } from "./action-creators";
import { communityState } from "./types";

export const initialState:communityState = {
    isLoading:false,
    appStatus:"activityinfo/APPLICATION_ACCEPTED",
    error:"",
    community_name:"Музыкальное сообщество",
    userRights:[
        "canBan",
        "canEditCommunity",
        "canEditPost",
        "canEditRequests",
        "canEditRoles",
        "canEditSchedule",
    ],
    members:[
        {id:0, name:"Иван", lastname:"Сергеев", group:"191-361",
            image:"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec", roles:[
                {name:"Руководитель", rights:["canEditPost"]},
                {name:"Преподаватель по гитаре", rights:[]},
                {name:"Участник", rights:[]},
        ]},
        {id:1, name:"Вадим",group:"191-361", lastname:"Сидоров", image:"", roles:[
            {name:"Модератор", rights:["canEditPost","canEditSchedule"]},
        ]},
        {id:2, name:"Сергей",group:"191-361", lastname:"Ларичев", image:"", roles:[
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
    ],
    info:{
        id: 0,
        communityId:0,
        image: "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/teens_and_exams_iStock_000005780399XSmall.jpg?itok=0nXiZMHU",
        name: "Музыкальное сообщество",
        description: "Тестовый дескрипшн",
        description_short:"Короткий дескрипшн",
        type: activityTypeList.community,
        tags: [{id:0, name:"Тестовый таг 0", color:"#AAAAAA"}, {id:1, name:"Тестовый таг 1", color:"#A1A1AA"}],
        links:[
            {id:0,name:"Aboboa JS", contact:"aboba.com", type:"link"}, {id:1,name:"гугл", contact:"google.com", type:"link"}],
        photos:[
            {id:0,description:"Фотка котенка с мероприятия", 
                content:"https://storage-api.petstory.ru/resize/1000x1000x80/70/ed/7f/70ed7fbe48c44d5f95aa99de83021a54.jpeg"},
            {id:1,description:"Фотка собачки с мероприятия", 
                content:"https://klike.net/uploads/posts/2020-06/1591253681_1.jpg"},
            {id:3,description:"Фотка 1 с мероприятия", 
                content:"https://exlibris.ru/wp-content/uploads/2019/07/7-PR-instrumentov-dlya-prodvizheniya-vashego-meropriyatiya.jpg"},],
        contacts:[
            {id:0,name:"Whats App", contact:"88005553535", type:"contact"},
            {id:1,name:"Телефон офиса", contact:"88006553535", type:"contact"}],
    } as CommunityTypeShort,
    joinRequests:[
        {id:5, name:"Лачин", lastname:"Лачинов", 
            image:"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec", 
            date:"01 сен", time:"12:39", group:"191-361"
        },
        {id:6, name:"Василий", lastname:"Пупкин", image:"",date:"31 сен", time:"16:20", group:"191-361" },
        {id:7, name:"Вера", lastname:"Сердючка", image:"", date:"23 фев", time:"14:48", group:"191-361"},
    ],
    roles:[
        {id:0,
            name:"Руководитель",
            rights:[ 
                "canBan",
                "canEditCommunity",
                "canEditPost",
                "canEditRequests",
                "canEditRoles",
                "canEditSchedule",],
            members:[{id:0,name:"Иван", lastname:"Сергеев",group:"191-361"}]},
            {id:1,
                name:"Участник",
                rights: [],
                members: [{ id: 1, name: "Сергей", lastname: "Ларичев", group: "191-361" },
                { id: 0, name: "Иван", lastname: "Сергеев", group: "191-361" }]
            },
            {
                id: 2,
                name: "Модератор",
                rights: ["canEditRequests","canBan",],
                members: [{ id: 1, name: "Вадим", lastname: "Сидоров", group: "191-361" },]
            },
            {id:3, name:"Преподаватель по гитаре", rights:[], members:[{id:0,name:"Иван", lastname:"Сергеев",group:"191-361"}]},
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
            const postId = state.posts[state.posts.length-1].id + 1;
            action.payload.id = postId;
            state.posts.unshift(action.payload);
        },
        addSubject(state, action:PayloadAction<ISubject>){
            
            const max = state.schedule.reduce((prev, current) => (prev.id > current.id) ? prev : current);
            const newId = max.id + 1;
            const newSubject = {...action.payload, id:newId} as ISubject
            state.schedule.push(newSubject);
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
        [setJoinRequestsThunk.fulfilled.type]:(state, action:PayloadAction<IJoinRequest[]>)=>{
            state.joinRequests = action.payload;
            state.error = "";
            state.isLoading = false;
        },
        [setJoinRequestsThunk.pending.type]:(state, action)=>{
            state.isLoading = true;
        },
        [setJoinRequestsThunk.rejected.type]:(state, action:PayloadAction<string>)=>{
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})

export default communitySlice.reducer;