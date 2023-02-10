import React, { ChangeEvent, ChangeEventHandler } from 'react';
import style from "./SwitchCheckbox.module.scss";

//RAW COMPONENT

type SwitchCheckboxProps = { isActive?: boolean, defaultChecked?:boolean, onSwitch: ChangeEventHandler<HTMLInputElement>, checkboxName: string, }

export const SwitchCheckbox = ({ isActive,defaultChecked, onSwitch, checkboxName }: SwitchCheckboxProps) => {

    const handleSwitch = (e:ChangeEvent<HTMLInputElement>) =>{
        onSwitch(e);
    }

    return (
        <div className={style.checkbox_container}>
            <input checked={isActive} onChange={handleSwitch} id={checkboxName} type="checkbox" 
                    className={style.checkbox_container__input}/>
            <label htmlFor={checkboxName} className={style.checkbox_container__toggle_body}>
                <span className={style.checkbox_container__toggle_circle}></span>
            </label>
        </div>
    )
}