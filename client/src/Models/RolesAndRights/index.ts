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
    canEditCommunity = 'canEditCommunity',
    canEditRequests = 'canEditRequests',
}

export type RoleRightName = 'canBan' | 'canEditPost' | 'canEditRoles' | 'canEditSchedule' | 'canEditCommunity' | 'canEditRequests';