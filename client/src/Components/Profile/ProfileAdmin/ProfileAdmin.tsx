import React, { FC } from "react";
import style from "../Profile.module.css";

interface ProfileAdminProps {
    
}
 
const ProfileAdmin: FC<ProfileAdminProps> = () => {
    return ( 
        <div className={style.profile_page_container__admin_section}>
            Admin here
        </div>
    );
}
 
export default ProfileAdmin;