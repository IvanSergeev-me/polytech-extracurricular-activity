import React, { FC } from "react";
import style from "./Header.module.scss";
import { Logo } from "./logo/Logo";
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

export default Header ;