import React, { FC } from "react";
import style from "../Profile.module.css";

interface ProfileRequestsProps {
    
}
 
const ProfileRequests: FC<ProfileRequestsProps> = () => {
    return ( 
        <div className={style.profile_page_container__requests}>
           requests here
        </div>
    );
}
 
export default ProfileRequests;