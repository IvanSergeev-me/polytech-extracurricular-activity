import classNames from "classnames/bind";
import React from "react";
import { NavLink} from "react-router-dom";
import n_style from "./ProfileNavbar.module.css";

interface ProfileNavbarProps {
    currentPath:string;
}
 
const ProfileNavbar = ({currentPath}:ProfileNavbarProps) => {

    const isAdmin = true;

    return ( 
        <nav className={n_style.profile_page_container__nav}>
            <NavElement currentPath={currentPath} link="./" name={"Сообщества и мероприятия"}/>
            <NavElement currentPath={currentPath} link="statistics" name={"Статистика"}/>
            <NavElement currentPath={currentPath} link="links" name={"Подать заявку"}/>
            {isAdmin && <NavElement currentPath={currentPath} link="admin" name={"Администрирование"}/>}
        </nav>
    );
}
 
export default ProfileNavbar;

interface NavProps{
    link:string,
    name:string,
    currentPath:string
}

const NavElement = ({link, name, currentPath}:NavProps) =>{

    const cx = classNames.bind(n_style);

    const navCondition = (currentPath ===`/Profile/${link}` || (currentPath ===`/Profile/` && link === "./"))

    const navElementClass = cx({
        nav__nav_wrapper: true,
        nav_selected: navCondition,
      });

    return(
        <NavLink className={navElementClass} to={link}>
            <div className={n_style.nav_wrapper__title_box}>
                <p>{name}</p>
            </div>
        </NavLink>
    )
}