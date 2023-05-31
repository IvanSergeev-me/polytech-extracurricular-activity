import React, { FC } from "react";
import style from "../Profile.module.scss";
import StatisticsHeader from "./StatisticsHeader/StatisticsHeader";
import Achievements from "./Achievements/Achievements";
import Statistics from "./Statistics/Statistics";
import ActivityGraph from "./ActivityGraph/ActivityGraph";

interface ProfileStatisticsProps {}
 
const ProfileStatistics: FC<ProfileStatisticsProps> = () => {
    return ( 
        <div className={style.profile_page_container__statisctics}>
           <StatisticsHeader />
           <Achievements />
           <Statistics />
           <ActivityGraph />
        </div>
    );
}
 
export default ProfileStatistics;