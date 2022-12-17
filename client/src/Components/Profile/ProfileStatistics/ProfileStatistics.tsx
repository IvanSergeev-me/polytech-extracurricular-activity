import React, { FC } from "react";
import style from "../Profile.module.css";

interface ProfileStatisticsProps {
    
}
 
const ProfileStatistics: FC<ProfileStatisticsProps> = () => {
    return ( 
        <div className={style.profile_page_container__statisctics}>
           Statistics here
        </div>
    );
}
 
export default ProfileStatistics;