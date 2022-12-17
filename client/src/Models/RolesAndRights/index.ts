export interface ICommunityRole{
    name:string,
    rights:IRoleRights[]
}

export interface IRoleRights{
    name:RoleRightName,
    canDo:boolean
}

export enum rolesRightsNames{
    canBan = 'canBan',
    canEditPost = 'canEditPost',
    canEditRoles = 'canEditRoles',
    canEditSchedule = 'canEditSchedule',
}

export type RoleRightName = 'canBan' | 'canEditPost' | 'canEditRoles' | 'canEditSchedule';