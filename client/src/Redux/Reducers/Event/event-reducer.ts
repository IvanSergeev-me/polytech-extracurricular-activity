import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { IUser } from "../../../Models/User";
import { eventState } from "./types";
import { EventTypeShort } from "Models/Activities";
import { IMember } from "Models/User";
import { IJoinRequest } from "Models/Community";

export const initialState: eventState = {
    isLoading: false,
    error: "",
    info: {
        id: 0,
        contacts: [{ id: 0, contact: "89164727387", name: "Телефон руководителя", type: "contact" }],
        links: [{ id: 0, contact: "carting.com", name: "Сайт", type: "link" }],
        date: "01.01.2022",
        time: "12:20",
        description: "Мероприятие - Картинг по улицам возле Политеха! Тут очень длинное описание этого. Вообще, веселое место. Посетите наше мероприятие.",
        description_short: "Картинг в Политехе",
        image: "",
        name: "Картинг на Семеновской",
        creatorId: 0,
        photos: [{
            id: 0, description: "Фотка котенка с мероприятия",
            content: "https://storage-api.petstory.ru/resize/1000x1000x80/70/ed/7f/70ed7fbe48c44d5f95aa99de83021a54.jpeg"
        },
        {
            id: 1, description: "Фотка собачки с мероприятия",
            content: "https://klike.net/uploads/posts/2020-06/1591253681_1.jpg"
        },
        {
            id: 3, description: "Фотка 1 с мероприятия",
            content: "https://exlibris.ru/wp-content/uploads/2019/07/7-PR-instrumentov-dlya-prodvizheniya-vashego-meropriyatiya.jpg"
        },
        {
            id: 4, description: "Фотка 2 с мероприятия",
            content: "https://pushkinmuseum.art/museum/support_us/events/7181_img_pc.jpg"
        },
        {
            id: 5, description: "Фотка 3 с мероприятия",
            content: "https://ntckompas.ru/upload/iblock/30f/30f0fc2bb0a345b1e3a87cbebcfafcd8.jpg"
        },],
        tags: [{ id: 0, color: "#FBB012", name: "Гонки" }, { id: 1, color: "#12B012", name: "Картинг" }],
        type: "event",
    },
    joinRequests: [
        {
            id: 0, lastname: "Фамилия0", name: "Имя0", group: "191-361", date:"12.04.2022", time:"13:43",
            image: "https://www.tastingtable.com/img/gallery/31-types-of-lemons-and-what-makes-them-unique/l-intro-1656086555.jpg"
        },
        {
            id: 1, lastname: "Фамилия1", name: "Имя1", group: "191-361", date:"12.04.2022", time:"12:21",
            image: "https://i.pinimg.com/originals/40/6b/60/406b6009741c8de50e68c86c21ce7b29.jpg"
        },
        {
            id: 2, lastname: "Фамилия2", name: "Имя2", group: "191-361", date:"12.04.2022", time:"15:49",
            image: ""
        },
        {
            id: 3, lastname: "Фамилия3", name: "Имя3", group: "191-361", date:"12.04.2022", time:"11:13",
            image: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
        },
    ],
    members: [
        {
            id: 0, lastname: "Сергеев", name: "Иван", group: "191-361",
            image: "https://www.tastingtable.com/img/gallery/31-types-of-lemons-and-what-makes-them-unique/l-intro-1656086555.jpg"
        },
        {
            id: 1, lastname: "Сидоров", name: "Вадим", group: "191-361",
            image: "https://i.pinimg.com/originals/40/6b/60/406b6009741c8de50e68c86c21ce7b29.jpg"
        },
        {
            id: 2, lastname: "Ларичев", name: "Сергей", group: "191-361",
            image: ""
        },
        {
            id: 3, lastname: "Ягмуров", name: "Александр", group: "191-361",
            image: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
        },
    ],
} as eventState

export const eventSlice = createSlice({
    name: "eventSlice",
    initialState: initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setInfo(state, action: PayloadAction<EventTypeShort>) {
            state.info = action.payload;
        },
        setMembers(state, action: PayloadAction<IMember[]>) {
            state.members = action.payload;
        },
        setJoinRequests(state, action: PayloadAction<IJoinRequest[]>) {
            state.joinRequests = action.payload;
        },
    },
});

export default eventSlice.reducer;