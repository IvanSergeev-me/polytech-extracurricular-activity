export interface CommunityRole{
    name:string,
    rights:RoleRights[]
}

export interface RoleRights{
    name:RoleRightName,
    canDo:boolean
}

export type RoleRightName = 'canBan' | 'canCreatePost' | 'canEditPost' | 'canDeletePost' | 'canEditRoles'