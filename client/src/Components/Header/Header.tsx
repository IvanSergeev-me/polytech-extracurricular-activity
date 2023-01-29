import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import ProfileBox from "./ProfileBox/ProfileBox";
import { SearchForm } from "./SearchForm/SearchForm";

export type SearchFormValues = {
    query: string;
};

const Header : FC= (props) => {
    
    const onSearchSubmit = (data:SearchFormValues) =>{
        console.log(data)
    }

    return ( 
        <header className={style.header}>
            <Logo />
            <div className={style.header__search_container}>
                <SearchForm onSearchSubmit={onSearchSubmit}/>
            </div>
            <ProfileBox />
        </header>
     );
}

type LogoProps = {}

const areEqual = (prevProps:LogoProps, nextProps:LogoProps) => {
    return true;
}

const Logo = React.memo((props:LogoProps) =>{
    return <NavLink to="/" className={style.header__logo_container}>
            <img className={style.logo} src="https://old.mospolytech.ru/img_new/top_bn/top_sh_en.png" alt="polytech logo" />
        </NavLink>
}, areEqual)

export default Header ;