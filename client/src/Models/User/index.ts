import { CommunityRole } from "../RolesAndRights"

export interface IUser{
    id:number,
    role:string,
    name:string,
    lastname:string,
    image?: string,
    login:string,
    activitiesMember?:number[]
}

export interface IMember{
    id:number,
    roles:CommunityRole[],
    name:string,
    lastname:string,
    image?: string,
}

