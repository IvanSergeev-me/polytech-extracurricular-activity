export interface ICommunityPublication {
    id:number,
    images?: IPublicationImage[],
    title:string,
    text:string,
    date:string,
    authorId:number
}

export interface IPublicationImage {
    id:0,
    image:string,
}