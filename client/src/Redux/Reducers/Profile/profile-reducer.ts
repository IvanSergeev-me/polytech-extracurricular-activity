import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activityTypeList } from "../../../Models/Activities";
import { ICommunityInfo, ICommunityInProfile, IEventInProfile, IEventShortInfo, IUserRequest } from "../../../Models/Profile";
import { profileState } from "./types";

export let initialState: profileState = {
    isLoading: false,
    communities: [
        {
            id: 0, name: "Музыкальное сообщество", date_start: "01.09.2022",
            image: "https://www.classicalmusicnews.ru/wp-content/uploads/2014/03/klassicheskaya-muzyika.jpg",
            roles: [{
                name: "Руководитель",
                rights:
                    ["canEditPost", "canEditSchedule"]
            }],
            status: "active"
        },
        {
            id: 1, name: "Клуб настольных игр", date_start: "01.09.2022",
            image: "https://www.ok-internet.ru/uploads/posts/2020-09/1599717397_50.jpg",
            roles: [{ name: "Участник", rights: [] }],
            status: "active"
        }
    ],
    events: [
        {
            id: 0, name: "Фестиваль первокурсника",
            creatorId: 0,
            date_visit: "10.09.2022",
            image: "",
            info: {
                date_visit: "10.09.2022",
                description: "Тут было такое то событие",
                members: [{ id: 0, name: "Иван", lastname: "Сергеев" }],
                name: "Фестиваль первокурсника",
                location: "Москва, Лужники"
            } as IEventShortInfo
        },
        {
            id: 1,
            creatorId: 2,
            name: "Конференция от компании Selectel",
            date_visit: "11.11.2022",
            image: "https://cdn.selectel.ru/site/img/selectel.1d4a236.png", info: {
                date_visit: "10.09.2022",
                description: "Тут было такое то событие",
                members: [{ id: 0, name: "Иван", lastname: "Сергеев" }, { id: 1, name: "Вадим", lastname: "Сидоров" }],
                name: "Конференция от компании Selectel",
                location: "Аудитория А-200, Большая Семеновская"
            } as IEventShortInfo
        },
        {
            id: 3,
            creatorId: 2,
            name: "Тайваньский форум",
            date_visit: "01.01.2024",
            image: "https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/Dostoprimechatelnosti-Tayvanya-e1531382297718.jpg", info: {
                date_visit: "10.09.2022",
                description: "Тут было такое то событие",
                members: [{ id: 0, name: "Иван", lastname: "Сергеев" }, { id: 1, name: "Вадим", lastname: "Сидоров" }, { id: 3, name: "Сергей", lastname: "Ларичев" }],
                name: "Тайваньский форум",
                location: "Аудитория А-200, Большая Семеновская"
            } as IEventShortInfo
        },
    ],
    userRequests: [
        {
            id: 10,
            date: "01.01.2022",
            name: "Сообщество танцев",
            type: activityTypeList.community,
            info: {
                id: 10,
                authorGroup: "191-361",
                authorName: "Иван",
                authorLastname: "Сергеев",
                date: "01.01.2022",
                direction: "Творчество",
                folder_link: "Наш гугл диск: someurl.com",
                isNeedAudience: true,
                name: "Сообщество танцев",
                targets: "Создание сообщества, где стуненты смогут практиковать танцы"
            } as ICommunityInfo
        },
        {
            id: 11,
            date: "01.01.2022",
            name: "Кружок рукоделия",
            type: activityTypeList.community,
            info: {
                id: 11,
                authorGroup: "191-361",
                authorName: "Вадим",
                authorLastname: "Сидоров",
                date: "01.01.2022",
                direction: "Ремесло",
                folder_link: "Наш гугл диск: someurl.com",
                isNeedAudience: true,
                name: "Кружок рукоделия",
                targets: "Создание сообщества, где стуненты смогут практиковать рукоделие, например, плести корзинки"
            } as ICommunityInfo
        }

    ],
    error: "",
}

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState: initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setCommunities(state, action: PayloadAction<ICommunityInProfile[]>) {
            state.communities = action.payload;
        },
        setEvents(state, action: PayloadAction<IEventInProfile[]>) {
            state.events = action.payload;
        },
        setUserRequests(state, action: PayloadAction<IUserRequest[]>) {
            state.userRequests = action.payload;
        }
    },
    extraReducers: {

    }
});

export default profileSlice.reducer;