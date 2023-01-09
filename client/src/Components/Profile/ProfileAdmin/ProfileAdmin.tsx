import React, { FC } from "react";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectUsersRequests } from "../../../Selectors";
import style from "../Profile.module.css";
import a_style from "./ProfileAdmin.module.css";
import RequestCard from "./RequestCard/RequestCard";

interface ProfileAdminProps {}
 
const ProfileAdmin: FC<ProfileAdminProps> = () => {

    return ( 
        <div className={a_style.profile_page_container__admin_section}>
            <h1 className={style.title}>Заявки на рассмотрении</h1>
            <Requests />
        </div>
    );
}

const Requests = (props:any) => {

    const requests = useTypedSelector(selectUsersRequests);

    return(
        <div className={a_style.admin_section__requests}>
            {requests.map(r=><RequestCard key={r.id} id={r.id} date={r.date} info={r.info} name={r.name} type={r.type}/>)}
        </div>
    )
}
 
export default ProfileAdmin;