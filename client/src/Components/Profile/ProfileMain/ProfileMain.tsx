import React, { FC } from "react";
import m_style from "./ProfileMain.module.scss";
import ProfileCommunities from "./ProfileCommunities/ProfileCommunities";
import ProfileEvents from "./ProfileEvents/ProfileEvents";
import { useTypedSelector } from "Hooks/useTypedSelector";
import { selectUserId } from "Selectors";

interface ProfileMainProps {
    
}
 
const ProfileMain: FC<ProfileMainProps> = () => {

    const userId = useTypedSelector(selectUserId);
    
    return ( 
        <div className={m_style.profile_page_container__main}>
            <ProfileCommunities userId={userId!}/>
            <ProfileEvents />
        </div>
    );
}
 
export default ProfileMain;