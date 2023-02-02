import React, {FC} from "react";
import { CommunityHeaderIfGuest } from "./CommunityHeaderIfGuest/CommunityHeaderIfGuest";
import { CommunityHeaderIfMember } from "./CommunityHeaderIfMember/CommunityHeaderIfMember";

export type HeaderProps = {
    info_id:number;
    community_name:string
}

type CommunityHeaderProps = {
    isMember:boolean;
} & HeaderProps;

export const CommunityHeader:FC<CommunityHeaderProps> = ({isMember, community_name,info_id}) =>{
    if (isMember) return <CommunityHeaderIfMember community_name={community_name} info_id={info_id}/>
    else return <CommunityHeaderIfGuest community_name={community_name} info_id={info_id}/>
}