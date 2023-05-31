import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Header.module.scss";
import NavIcon from "../NavIcon/NavIcon";
import { LogoRus } from "Assets";

type LogoProps = {}

export const Logo = (props: LogoProps) => {
    return(
        <div className={style.header__logo_container}>
            <NavLink to="/" className={style.logo_container__logo}>
                <img className={style.mospolytech_logo} src={LogoRus} alt="polytech logo" />
            </NavLink>
            <NavIcon exactPath={true} link={"/"} title="Главная">
                <svg 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </NavIcon>
        </div>
    );
};
