import React, { FC } from "react";
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";
import { selectEventsInProfile } from "../../../../Selectors";
import style from "../../Profile.module.css";
import m_style from "../ProfileMain.module.css";
import ProfileEventCard from "./ProfileEventCard/ProfileEventCard";

interface ProfileEventsProps {
    
}
 
const ProfileEvents: FC<ProfileEventsProps> = (props) => {

    const events = useTypedSelector(selectEventsInProfile);

    return ( 
        <div className={m_style.main__events_container}>
            <h1 className={style.title}>История мероприятий</h1>
            <div className={m_style.events_container__events}>
                {events.map(event => <ProfileEventCard 
                    id={event.id} 
                    key={event.id} 
                    date_visit={event.date_visit} 
                    image={event.image} 
                    info={event.info} 
                    name={event.name}/>)}
            </div>
        </div>
    );
}
 
export default ProfileEvents;