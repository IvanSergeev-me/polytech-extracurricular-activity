export interface LinkInCol{
    url:string;
    name:string;
    info?:string;
};

export interface RequestsColProps{
    links:LinkInCol[];
    col_name:string;
};

export const EventsRequests:RequestsColProps = 
    {col_name:"Мероприятия", links:[
        {name:"Зарегистрировать новое мероприятие", url:"/event-options/create"},
        {name:"Изменить информацию о мероприятии", url:"/event-options/change"},
    ]};

export const CommunitiesRequests:RequestsColProps = 
    {col_name:"Сообщества", links:[
        {name:"Создание сообщества", url:"/community-options/create"},
        {name:"Изменение данных сообщества", url:"/community-options/change"},
        {name:"Закрытие сообщества", url:"/community-options/close-request"},
    ]};


    