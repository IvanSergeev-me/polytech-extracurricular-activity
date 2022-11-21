export interface IUser{
    id:number,
    role:string,
    name:string,
    lastname:string,
    image?: string,
    login:string,
    activitiesMember?:number[]
}
