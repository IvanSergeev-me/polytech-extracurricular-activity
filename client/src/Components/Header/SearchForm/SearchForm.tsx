import classNames from "classnames/bind";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchFormValues } from "../Header";
import style from "../Header.module.scss";

export const SearchForm = (props:any) => {
    const cx = classNames.bind(style);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<SearchFormValues>();

    let onSubmit = (data:SearchFormValues) =>{ 
        props.onSearchSubmit(data);
        reset(); 
    }
    
    const [isSelected, toggleSelect] = useState(false);

    const changeSelect = () =>{
        isSelected?toggleSelect(false):toggleSelect(true)
    }

    const SearchClass = cx({
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