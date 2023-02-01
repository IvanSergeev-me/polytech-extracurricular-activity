import { NavLink } from "react-router-dom";
import React from "react";
import style from "../Header.module.scss";
import classNames from "classnames/bind";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { usePathname } from "../../../Hooks/usePathname";
import { selectUserFirstLetters } from "../../../Selectors";
import NavIcon from "../NavIcon/NavIcon";

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
            <NavIcon link={"/Profile"} title="Профиль">
                <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 
                        7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 
                        22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 
                        11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 
                        0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 
                        8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 
                        0 0 1-2.39 5.64z"></path>
                        <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 
                        0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 
                        0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 
                        1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 
                        1.91 0 0 1-2 2z"></path>
                </svg>
            </NavIcon>
        </div> 
        );
}
 
export default ProfileBox;