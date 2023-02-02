import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "../Profile.module.scss";
import pl_style from "./ProfileLinks.module.scss";
import { CommunitiesRequests, EventsRequests, RequestsColProps } from "./RequestLinksData";

interface ProfileRequestsProps {
    
}
 
const ProfileRequests: FC<ProfileRequestsProps> = () => {
    return ( 
        <div className={pl_style.profile_page_container__requests}>
           <div className={pl_style.requests__requests_wrapper}>
                <LinksCol col_name={CommunitiesRequests.col_name} links={CommunitiesRequests.links}/>
                <LinksCol col_name={EventsRequests.col_name} links={EventsRequests.links}/>
           </div>
        </div>
    );
}



const LinksCol = (props:RequestsColProps) =>{
    return(
        <div className={pl_style.requests_wrapper__requests_col}>
            <h2 className={style.subtitle}>{props.col_name}</h2>
            <div className={pl_style.requests_col__options}>
                {props.links.map((l,index)=> <p key={index}><NavLink className={style.link} to={l.url}>{l.name}</NavLink></p>)}
            </div>
        </div>
    )
}
 
export default ProfileRequests;