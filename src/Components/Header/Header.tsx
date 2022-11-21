import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import classNames from 'classnames/bind';
import { useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';

let cx = classNames.bind(style);

type SearchFormValues = {
    query: string;
};

const Header : FC= (props) => {
    let userPicture = "";
    let location = useLocation();
    let pictureClass = cx({
        image_filler: true,
        profile_active: location.pathname==="/Profile"
      });
    
    let onSearchSubmit = (data:SearchFormValues) =>{
        console.log(data)
    }

    return ( 
        <header className={style.header}>
            <NavLink to="/" className={style.header__logo_container}><img className={style.logo} src="https://old.mospolytech.ru/img_new/top_bn/top_sh_en.png" alt="polytech logo" /></NavLink>
            <div className={style.header__search_container}>
                <SearchForm onSearchSubmit={onSearchSubmit}/>
            </div>
            <div className={style.header__profile_container}>
                <NavLink to="/Profile" className={style.profile_container__profile}>
                    {userPicture?<img className={pictureClass} src={userPicture} alt="userPic" />:<div className={pictureClass}></div>}
                    <p className={style.title}>Профиль</p>       
                </NavLink>
            </div>
        </header>
     );
}

const SearchForm = (props:any) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SearchFormValues>();

    let onSubmit = (data:SearchFormValues) =>{ 
        props.onSearchSubmit(data);
        reset(); 
    }
    
    let [isSelected, toggleSelect] = useState(false);

    let changeSelect = () =>{
        isSelected?toggleSelect(false):toggleSelect(true)
    }

    let SearchClass = cx({
        search_form__input_container: true,
        active_search: isSelected
      });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.search_container__search_form}>
            <p className={style.search_form__title}>Поиск по внеучебной деятельности</p>
            <div className={SearchClass}>
                <input className={style.input_container__submit}  type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1890px-Vector_search_icon.svg.png" alt="Submit" width="16" height="16" />
                <div onFocus={changeSelect} onBlur={changeSelect} className={style.input_container__input}>
                    {errors?.query && <p className={style.error_title}>{errors.query.message}</p>}
                    <input  className={style.input__field} {...register("query",{ required: true, maxLength: 20 })} placeholder="Название или тег" />
                </div>  
            </div>  
        </form>
      );
}

function areEqual(prevProps:any, nextProps:any) {
    return false;
}
export default React.memo(Header, areEqual) ;