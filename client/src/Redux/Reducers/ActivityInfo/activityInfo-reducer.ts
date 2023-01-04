import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activityTypeList, IActivity } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { setAppStatusThunk } from "./action-creators";
import { activitiyInfoState } from "./types";

export let initialState:activitiyInfoState = {
    isLoading:false,
    activity:{
        id: 0,
        communityId:0,
        image: "https://www.teachingenglish.org.uk/sites/teacheng/files/styles/wide/public/images/teens_and_exams_iStock_000005780399XSmall.jpg?itok=0nXiZMHU",
        name: "Тестовая активити",
        description: "Тестовый дескрипшн",
        date:"",
        time:"",
        type: activityTypeList.community,
        //linked community/event id
        tags: [{id:0, name:"Тестовый таг 0", color:"#AAAAAA"}, {id:1, name:"Тестовый таг 1", color:"#A1A1AA"}],
        members_count:100,
        links:[{id:0,name:"Aboboa JS", contact:"aboba.com", type:"link"}, {id:1,name:"гугл", contact:"google.com", type:"link"}],
        photos:[{id:0,description:"Фотка котенка с мероприятия", content:"https://storage-api.petstory.ru/resize/1000x1000x80/70/ed/7f/70ed7fbe48c44d5f95aa99de83021a54.jpeg"},
                {id:1,description:"Фотка собачки с мероприятия", content:"https://klike.net/uploads/posts/2020-06/1591253681_1.jpg"},
                {id:3,description:"Фотка 1 с мероприятия", content:"https://exlibris.ru/wp-content/uploads/2019/07/7-PR-instrumentov-dlya-prodvizheniya-vashego-meropriyatiya.jpg"},
                {id:4,description:"Фотка 2 с мероприятия", content:"https://pushkinmuseum.art/museum/support_us/events/7181_img_pc.jpg"},
                {id:5,description:"Фотка 3 с мероприятия", content:"https://ntckompas.ru/upload/iblock/30f/30f0fc2bb0a345b1e3a87cbebcfafcd8.jpg"},],
        contacts:[{id:0,name:"Whats App", contact:"88005553535", type:"contact"}, {id:1,name:"Телефон офиса", contact:"88006553535", type:"contact"}],
    },
    appStatus:"activityinfo/APPLICATION_NOT_SENT",
    error:"",
}
export const activityInfoSlice = createSlice({
    name:"activityInfoSlice",
    initialState:initialState,
    reducers:{
        setIsLoading(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setError(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        setActivity(state, action:PayloadAction<IActivity>){
            state.activity = action.payload;
        },
        setAppStatus(state, action:PayloadAction<ActivityInfoApplicationStatus>){
            state.appStatus = action.payload;
        }
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

export default activityInfoSlice.reducer;