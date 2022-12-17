import { NavLink } from "react-router-dom";
import React from "react";
import style from "../Header.module.css";
import classNames from "classnames/bind";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { usePathname } from "../../../Hooks/usePathname";
import { selectUserFirstLetters } from "../../../Selectors";

interface ProfileBoxProps {
    
}
 
const ProfileBox = (props:ProfileBoxProps) => {

    const cx = classNames.bind(style);
    let userPicture = "";
    const pathname = usePathname();
    const userFirstLetters = useTypedSelector(selectUserFirstLetters);
    const pictureClass = cx({
        image_filler: true,
        profile_active: pathname.startsWith("/Profile")
      });

    return ( 
        <div className={style.header__profile_container}>
            <NavLink to="/Profile" className={style.profile_container__profile}>
                {userPicture?<img className={pictureClass} src={userPicture} alt="userPic" />:<div className={pictureClass}><p>{userFirstLetters}</p></div>}
                <p className={style.title}>Профиль</p>       
            </NavLink>
        </div> 
        );
}
 
export default ProfileBox;