import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activityTypeList } from "../../../Models/Activities";
import { ICommunityInfo, ICommunityInProfile, IEventInProfile, IEventShortInfo, IUserRequest } from "../../../Models/Profile";
import { profileState } from "./types";
import { getCommunitiesInProfileThunk } from "./action-creators";

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
            image: "https://ucarecdn.com/0eddfa5e-15cc-493e-8fbf-e0b90440a362/", info: {
                date_visit: "10.09.2022",
                description: "Встреча с представителями компании Selectel. Разговор с руководством компании и обсуждение трудоустройства.",
                members: [{ id: 0, name: "Иван", lastname: "Сергеев", group: "191-361" }, { id: 1, name: "Вадим", lastname: "Сидоров", group: "191-361" }],
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
    achievements: {
        achievementCards: [
            {
                id: 0, cardName: "Первое место на хакатоне 'Айти прогер'",
                cardImage: "https://www.zodiak-2000.ru/media/posters/1030_033_003.jpg"
            },
            {
                id: 1, cardName: "Достижение 2",
                cardImage: "https://1nagrada.ru/wa-data/public/shop/products/67/41/4167/images/2509/2509.970.jpg"
            },
            {
                id: 2, cardName: "Достижение 3",
                cardImage: ""
            },
            {
                id: 3, cardName: "Достижение 4",
                cardImage: ""
            },
            {
                id: 4, cardName: "Достижение 5",
                cardImage: "https://d2j2pkaf21fpf8.cloudfront.net/attachments/c-7/s-8/widgets/4b36d397a43b4edde32e1ee23ab365cc49b4956cfae12ed313df3f96512dd5bff3a41eeb/variants/v-550x550-contain.jpg"
            },
        ],
        achievementInfo: null,
    },
    statistics:{
        classesVisited:0,
        eventsVisited:0,
        favoriteCommunity:"Музыкальное сообщество политеха",
        favoriteEvent:"Отсутствует",
        postsPublicated:0,
    },
    activityGraphData:[
        {activityIndex:10, dayName:"23 мая"},
        {activityIndex:15, dayName:"24 мая"},
        {activityIndex:14, dayName:"25 мая"},
        {activityIndex:64, dayName:"26 мая"},
        {activityIndex:28, dayName:"27 мая"},
        {activityIndex:37, dayName:"28 мая"},
        {activityIndex:69, dayName:"29 мая"},
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
        [getCommunitiesInProfileThunk.fulfilled.type]: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            state.error = "";
            state.isLoading = false;
        },
        [getCommunitiesInProfileThunk.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getCommunitiesInProfileThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});

export default profileSlice.reducer;