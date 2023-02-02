import React, {forwardRef, SyntheticEvent, useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import style from './Textarea.module.scss';
import "./PopupSettings.scss";
import { ChangeHandler } from 'react-hook-form';

type TextareaProps = {
    title:string;
    PopupChildren?: React.ReactElement;
    placeholder:string;
    defaultValue?:string;
    errorMessage?:string;
    value:string;
    onChange:(val:SyntheticEvent)=>void | ChangeHandler;
} 

const Textarea =  forwardRef< HTMLTextAreaElement , TextareaProps>(
    ({title,PopupChildren,defaultValue,placeholder,errorMessage,onChange,value}:TextareaProps , ref) => {

    const [rows, setRows] = useState<number>(2);

    useEffect(() => {
        if(value && value.length>0){
            setRows(Math.round(value.length/60));
        }
        if((value && value.length === 0) || !value){
            setRows(2);
        }
    }, [value])
    

    return (
        <div className={style.textarea_wrapper}>
            <h3  className={style.textarea_wrapper__title}>
                {title} 
                {PopupChildren&&<Popup
                    className="textarea_popup"
                    keepTooltipInside={true}
                    repositionOnResize={true}
                    trigger={<span className={style.textarea_wrapper__popup_trigger}>?</span>}
                    position={'right center'}>
                        {PopupChildren}
                </Popup>}
            </h3>
            <div  className={style.textarea_wrapper__textarea_box}>
                {errorMessage && <p  className={style.textarea_box__error}>{errorMessage}</p>}
                <textarea value={value} rows={rows} onChange={onChange} placeholder={placeholder} ref={ref} className={style.textarea_box__textarea}/>
            </div>
            
        </div>
    )
    })

export default Textarea;
