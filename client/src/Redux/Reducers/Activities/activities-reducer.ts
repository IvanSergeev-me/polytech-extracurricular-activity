import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActivityCard } from "../../../Models/Activities";
import { getActivitiesThunk } from "./action-creators";
import { activitiesState } from "./types";

//Файл типизированный редюсер 
export let initialState:activitiesState = {
    isLoading:false,
    error:"",
    activities:[
        {id:1,
            type:"community",
            name:"Музыкальное сообщество",
            image: "https://www.iguides.ru/upload/medialibrary/5f2/nlywxxnikby2quiuxhnq4pat2nelbifz.png",
            description:"В этом сообществе будет то то да то то",
            tags:[{id: 1, color:"#0B10DA", name:"Музыка"}, {id: 2, color:"#DA12DA", name:"Творчество"}]},
        {id:2,
            type:"community",
            name:"Полигранник",
            image: "https://www.raiffeisen-media.ru/wp-content/uploads/2021/12/1-1.jpg",
            description:"В этом сообществе НАСТОЛКИ",
            tags:[{id: 1, color:"#DC12DA", name:"Игры"}, {id: 2, color:"#DA12DA", name:"Настолки"}]},
        {id:3,
            type:"community",
            name:"Клуб яхт Политеха",
            image: "https://mospolytech.ru/upload/iblock/997/%D0%AF%D1%85%D1%82%20%D0%BA%D0%BB%D1%83%D0%B1%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5%20%D0%B2%20%D0%BC%D0%B5%D0%B6%D0%B2%D1%83%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D1%85%20%D1%81%D0%BE%D1%80%D0%B5%D0%B2%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D1%85.jpg",
            description:"В этом сообществе будет то то да то то да и яхты да и плюхи",
            tags:[{id: 1, color:"#DC12DA", name:"Яхты"}, {id: 2, color:"#DA12DA", name:"Вертолеты"},{id: 3, color:"#AA12DA", name:"Корабль"}]},
    ],
    page:1,
}

export const activitiesSlice = createSlice({
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
        setActivities(state, action:PayloadAction<IActivityCard[]>){
            state.activities = action.payload;
        },
        setPage(state, action:PayloadAction<number>){
            state.page = action.payload;
        },
    },
    extraReducers:{
        [getActivitiesThunk.fulfilled.type]:(state, action:PayloadAction<IActivityCard[]>)=>{
            state.activities = action.payload;
            state.error = "";
            state.isLoading = false;
        },
        [getActivitiesThunk.pending.type]:(state, action)=>{
            state.isLoading = true;
        },
        [getActivitiesThunk.rejected.type]:(state, action:PayloadAction<string>)=>{
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})

export default activitiesSlice.reducer;