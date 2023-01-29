import React from "react";
import style from "../ActivityInfo.module.scss";
import membersIcon from "../../../Assets/Images/members.png";

type ActivityHeadingProps = {name:string, members_count:number}

export const ActivityHeading = ({ name, members_count }: ActivityHeadingProps) => {
    return <div className={style.top__heading}>
        <h1 className={style.title}>
            {name}
        </h1>
        <div className={style.members}>
            <img className={style.members__icon} src={membersIcon} alt="members icon" />
            <p className={style.members__text}>{members_count ? members_count : "0"} участников</p>
        </div>
    </div>;
};
