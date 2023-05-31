import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";
import { selectCommunitiesInProfile } from "../../../../Selectors";
import style from "../../Profile.module.scss";
import m_style from "../ProfileMain.module.scss";
import ProfileCommunityCard from "./ProfileCommunityCard/ProfileCommunityCard";
import { useAppDispatch } from "Hooks/useActions";
import { getCommunitiesInProfileThunk } from "Redux/Reducers/Profile/action-creators";

interface ProfileCommunitiesProps {
    userId:number,
}
 
const ProfileCommunities: FC<ProfileCommunitiesProps> = ({userId}) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCommunitiesInProfileThunk(userId));
    }, [dispatch, userId]);

    const communities = useTypedSelector(selectCommunitiesInProfile);

    return ( 
        <div className={m_style.main__communities_container}>
            <h1 className={style.title}>Ваши сообщества</h1>
            <div className={m_style.communities_container__communities}>
                {communities.map(com => <ProfileCommunityCard 
                    id={com.id}
                    key={com.id} 
                    name={com.name} 
                    date_start={com.date_start} 
                    image={com.image} 
                    roles={com.roles} 
                    status={com.status}/>)}
            </div>
        </div>
    );
}
 
export default ProfileCommunities;