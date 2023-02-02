import GearIcon from "../../../../Assets/Images/Gear.png";
import FeedIcon from "../../../../Assets/Images/Feed.png";
import ScheduleIcon from "../../../../Assets/Images/Schedule.png";
import MembersIcon from "../../../../Assets/Images/Members2.png";
import InfoIcon from "../../../../Assets/Images/Info.png";
import RequestsIcon from "../../../../Assets/Images/Requests.png";
import RoleIcon from "../../../../Assets/Images/Role.png";

export type ServiceType = {
    id:number;
    name:string;
    color:string;
    image:any;
    link?:string;
    onServiceClick?:Function;
}

export const ServicesList = [
    {id:0, name:"Публикации", image:{FeedIcon}, color:"#EC5F6B", link:`./`},
    {id:1,name:"Расписание", image:{ScheduleIcon}, color:"#EC5FB6", link:`schedule`},
    {id:2,name:"Участники", image:{MembersIcon}, color:"#9CBBFF", onServiceClick:undefined},
    {id:3,name:"Информация", image:{InfoIcon}, color:"#5F6DEC", link:`/activities/`},
    {id:4,name:"Настройки", image:{GearIcon}, color:"#797979", link:`settings`},
    {id:5,name:"Роли", image:{RoleIcon}, color:"#EE9E44", link:`edit-roles`},
    {id:6,name:"Заявки", image:{RequestsIcon}, color:"#40C5C5", link:`requests`},
]