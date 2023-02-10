import { IMemberShort } from './../User/index';
import { ValueOf } from './../../Assets/Utils/ValueOf';
export interface ICommunityRole{
    name:string,
    rights:RoleRightName[]
}

export const RolesRightsNames = {
    canBan:'canBan',
    canEditPost :'canEditPost',
    canEditRoles: 'canEditRoles',
    canEditSchedule: 'canEditSchedule',
    canEditCommunity : 'canEditCommunity',
    canEditRequests : 'canEditRequests',
} as const

export type RoleRightName = ValueOf<typeof RolesRightsNames>;

export type RightsGlossary = Record<RoleRightName, string>;

export const rightsGlossary:RightsGlossary = 
    {canBan:"Бан пользователей",
    canEditPost:"Изменение постов",
    canEditRoles:"Управление ролями", 
    canEditSchedule:"Изменение расписания",
    canEditCommunity:"Изменение настроек сообщества", 
    canEditRequests:"Обработка заявок", 
}

export type RoleAndMembers = ICommunityRole & {id:number,members:IMemberShort[]}