import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activityTypeList, AllActivityType, CommunityType } from "../../../Models/Activities";
import { ActivityInfoApplicationStatus } from "../../../Models/ApplictationStatuses";
import { getActivityInfoThunk } from "./action-creators";
import { activitiyInfoState } from "./types";

export let initialState: activitiyInfoState = {
    isLoading: false,
    activity: {
        id: 0,
        communityId: 0,
        image: "https://static.tildacdn.com/tild3231-3832-4839-b832-643335326236/DSC_5240.jpg",
        name: "Музыкальное сообщество Политеха",
        description: "Добро пожаловать в Музыкальное сообщество Московского политеха, где музыка воплощается в различных формах и жанрах! Наше сообщество радо представить вам два направления - гитарное и электронное. \n Гитарное направление:Если вы увлечены гитарой и хотите погрузиться в мир ее звуков, то вы попали по адресу. В нашем музыкальном сообществе мы собираем студентов, которые разделяют любовь к этому инструменту. Здесь вы найдете разнообразные занятия, мастер-классы и встречи с опытными гитаристами, где вы сможете улучшить свои навыки игры, изучить новые стили и техники, а также найти единомышленников для совместных музыкальных проектов. Независимо от вашего уровня подготовки, у нас найдется место для вашего творчества и развития музыкальных способностей. \n Направление электронной музыки:Если вы увлечены электронной музыкой и мечтаете погрузиться в мир синтезаторов, сэмплеров и компьютерных программ, то наше музыкальное сообщество идеально подходит для вас. У нас вы найдете все необходимое для изучения и создания электронной музыки. Наша программа включает в себя курсы по основам электронной музыки, занятия с опытными преподавателями, работу в современных студиях звукозаписи и возможность участия в музыкальных проектах и выступлениях. \n Независимо от того, являетесь ли вы новичком или опытным продюсером, наша команда с радостью поможет вам раскрыть ваш потенциал в мире электронной музыки.Присоединяйтесь к Музыкальному сообществу Московского политеха и дайте своему творчеству звучать вместе с нами. Здесь вы найдете вдохновение, обучение и возможность встретиться с единомышленниками, которые разделяют вашу страсть к музыке. Наше сообщество открыто для всех студентов, независимо от факультета и уровня музыкальной подготовки. Давайте создадим прекрасную музыку вместе!",
        date: "",
        time: "",
        type: activityTypeList.community,
        tags: [
            { id: 0, color: "#FF5C00", name: "Музыка" },
            { id: 1, color: "#005F00", name: "Творчество" },
            { id: 2, color: "#FC0FC0", name: "Гитара" },
            { id: 3, color: "#FF2B2B", name: "FL-Studio" },
        ],
        members_count: 100,
        links: [
            { id: 0, name: "Купить гитару для занятий", contact: "buyguitar.com", type: "link" },
            { id: 1, name: "Наша группа в ВК", contact: "vk.com/polymusic", type: "link" }],
        contacts: [
            { id: 0, name: "Telegram руководителя", contact: "88005553535", type: "contact" },
            { id: 1, name: "Телефон руководителя", contact: "88006553535", type: "contact" }
        ],
        photos: [
            {
                id: 0, description: "Обучение гитаре на занятиях",
                content: "https://www.temposchoolofmusic.com/wp-content/uploads/2021/01/guitar-lessons-near-me-cost-min-scaled.jpg"
            },
            {
                id: 1, description: "Обучение FL-STUDIO на занятиях",
                content: "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/img_shot/basics_interface.png"
            },
            {
                id: 3, description: "Фотка 1 с мероприятия",
                content: "https://avatars.dzeninfra.ru/get-zen_doc/4519444/pub_6391ab4621a7532cbeb3b9e2_6391b0a5efe3bc6e5118db59/scale_1200"
            },
            {
                id: 4, description: "Фотка 2 с мероприятия",
                content: "https://defortestars32.ru/d/photo_2022-03-17_18-55-50.jpg"
            },
            {
                id: 5, description: "Фотка 3 с мероприятия",
                content: "https://rokshkola.ru/wp-content/uploads/2022/04/%D1%88%D0%BA%D0%BE%D0%BB%D0%B0-%D1%80%D0%BE%D0%BA%D0%B0-%D0%BE%D0%BB%D0%B5%D0%B3-%D0%BA%D1%83%D0%B7%D1%8C%D0%BC%D0%B8%D0%BD-atwork_1.jpg"
            },
        ],
    } as CommunityType,
    appStatus: "activityinfo/APPLICATION_ACCEPTED",
    error: "",
}
export const activityInfoSlice = createSlice({
    name: "activityInfoSlice",
    initialState: initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setActivity(state, action: PayloadAction<AllActivityType>) {
            state.activity = action.payload;
        },
        setAppStatus(state, action: PayloadAction<ActivityInfoApplicationStatus>) {
            state.appStatus = action.payload;
        }
    },
    extraReducers: {
        [getActivityInfoThunk.fulfilled.type]: (state, action: PayloadAction<AllActivityType>) => {
            console.log(action.payload)
            state.error = "";
            state.isLoading = false;
        },
        [getActivityInfoThunk.pending.type]: (state, action) => {
            state.isLoading = true;
        },
        [getActivityInfoThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})

export default activityInfoSlice.reducer;