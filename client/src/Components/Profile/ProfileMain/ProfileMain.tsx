import React, { FC } from "react";
import style from "../Profile.module.css";
import ProfileCommunities from "./ProfileCommunities/ProfileCommunities";
import ProfileEvents from "./ProfileEvents/ProfileEvents";

interface ProfileMainProps {
    
}
 
const ProfileMain: FC<ProfileMainProps> = () => {
    return ( 
        <div className={style.profile_page_container__main}>
            <ProfileCommunities />
            <ProfileEvents />
        </div>
    );
}
 
export default ProfileMain;