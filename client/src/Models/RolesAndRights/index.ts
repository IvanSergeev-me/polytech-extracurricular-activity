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

export type RoleRightName = ValueOf<typeof RolesRightsNames>