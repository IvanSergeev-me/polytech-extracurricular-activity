import React, {  ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import s_style from "./CommunitySettings.module.scss";
import style from "../CommunityPage.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { CommunityTypeShort } from "../../../Models/Activities";

interface FilePickerProps{
    onImageChange: (files:File) => void;
}

const CommunityImage = () =>{
    
    // eslint-disable-next-line
    const [isShowed, setShowed] = useState(true);

    const { control, getValues } = useFormContext<CommunityTypeShort>();

    const {image} = getValues();

    return(
        <div className={s_style.settings_left__image_container} onMouseEnter={()=>setShowed(true)} onMouseLeave={()=>setShowed(false)}>
            <img src={image} alt="community" />
            <div className={s_style.image_container__change_image_box}>
                <Controller
                    name="image"
                    control={control}
                    render={({field: { onChange } }) => <ImageFilePicker onImageChange={val=>{
                        onChange(URL.createObjectURL(val));
                    }}/>}
                    />
            </div>
        </div>
    )
}

const ImageFilePicker = (props:FilePickerProps) =>{

    const filePicker = useRef<HTMLInputElement>(null);
    const handleClick = async (e:SyntheticEvent) =>{
        if(filePicker.current!==null) {
            filePicker.current.click();
        } 
        e.preventDefault();
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !==null){
            props.onImageChange(e.target.files[0]);
        }
    }
    return(
        <div>
            <p onClick={handleClick}>Изменить изображение</p>
            <input className={style.invisible_input} type="file" multiple={false} ref={filePicker} onChange={handleChange} accept="image/*,.png,.jpg"/>
        </div>
    )
}

export default CommunityImage;