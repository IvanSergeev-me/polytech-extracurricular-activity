import { ICommunityRole } from "../RolesAndRights"

export interface IUser{
    id:number,
    role:string,
    name:string,
    lastname:string,
    image?: string,
    login:string,
    group?:string,
    activitiesMember?:number[]
}

export interface IMember{
    id:number,
    roles:ICommunityRole[],
    name:string,
    lastname:string,
    image: string,
    group?:string,
}

export interface IMemberShort {
    id:number,
    name:string,
    lastname:string,
    group?:string,
}

