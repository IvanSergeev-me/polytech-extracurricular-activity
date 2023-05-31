import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActivityCard } from "../../../Models/Activities";
import { getActivitiesThunk } from "./action-creators";
import { activitiesState } from "./types";

export let initialState: activitiesState = {
    isLoading: false,
    error: "",
    activities: [
        {
            id: 0,
            description: "В данном сообществе проходят занятия по музыке! Записывайся и устраивай рок вместе с нами.",
            image: "https://static.tildacdn.com/tild3231-3832-4839-b832-643335326236/DSC_5240.jpg",
            name: "Музыкальное сообщество Политеха",
            tags: [
                { id: 0, color: "#FF5C00", name: "Музыка" },
                { id: 1, color: "#005F00", name: "Творчество" },
                { id: 2, color: "#FC0FC0", name: "Гитара" },
                { id: 3, color: "#FF2B2B", name: "FL-Studio" },
            ],
            type: "community",
        },
        {
            id: 1,
            description: "Фестиваль студента - это ежегодное мероприятие... текст и еще какой-то текст.",
            image: "https://api.park-gorkogo.com/uploads/ckeditor/pictures/1052/content_hijlS_mhMbY.jpg",
            name: "Фестиваль студента 2023!",
            tags: [
                { id: 0, color: "#1F75FE", name: "Студенчество" },
                { id: 1, color: "#FE28A2", name: "Ежегодно" },
                { id: 2, color: "#FC0FC0", name: "Выезд" },
            ],
            type: "event",
        },
        {
            id: 2,
            description: "Научный форум 'Путь к знанию' - это научный форум бла бла бла...",
            image: "https://history.tsu.ru/sites/default/files/w1000.jpg",
            name: "Научный форум 'Путь к знанию'",
            tags: [
                { id: 0, color: "#009900", name: "Форум" },
                { id: 1, color: "#FE28A2", name: "Наука" },
                { id: 2, color: "#1F75FE", name: "Карьера" },
                { id: 3, color: "#FC0FC0", name: "Знания" },
                { id: 4, color: "#FF7518", name: "При правительстве РФ" },
            ],
            type: "event",
        },
    ],
    page: 1,
}

export const activitiesSlice = createSlice({
    name: "activitiesSlice",
    initialState: initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setActivities(state, action: PayloadAction<IActivityCard[]>) {
            state.activities = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: {
        [getActivitiesThunk.fulfilled.type]: (state, action: PayloadAction<IActivityCard[]>) => {
            //state.activities = action.payload;
            state.error = "";
            state.isLoading = false;
        },
        [getActivitiesThunk.pending.type]: (state, action) => {
            state.isLoading = true;
        },
        [getActivitiesThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})

export default activitiesSlice.reducer;