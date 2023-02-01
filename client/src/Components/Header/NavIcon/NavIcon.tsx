import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePathname } from '../../../Hooks/usePathname';
import style from "../Header.module.scss";

type NavIconProps = {link:string; exactPath?:boolean; color?:string, title:string; children:React.ReactNode}

const NavIcon = ({children,title,color,exactPath, link}:NavIconProps) => {

    const pathname = usePathname();

    const activeCondition = exactPath?pathname === link:pathname.startsWith(link);

    const activeColorStyle = {
        color:color?color:"#567DFF",
    }

    return (
        <NavLink style={activeCondition?activeColorStyle:{}} to={link} className={style.app_icon}>
            {children}
            <p>{title}</p>
        </NavLink>
  )
}

export default NavIcon

