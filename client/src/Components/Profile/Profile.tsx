import React, { FC } from "react";
import { usePathname } from "../../Hooks/usePathname";
import { profileRoutes } from "../../Routes/routes";
import AppRouter from "../Common/Router/Router";
import style from "./Profile.module.css";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";

interface ProfileProps {
    
}
 
const Profile: FC<ProfileProps> = () => {

    const currentPath = usePathname();
    
    return ( 
        <section className={style.profile_page_container}>
            <ProfileNavbar currentPath={currentPath}/>
            <AppRouter routes={profileRoutes}/>
        </section>
    );
}
 
export default Profile;