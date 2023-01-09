import React, {  ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import s_style from "./CommunitySettings.module.css";
import style from "../CommunityPage.module.css";
import { Controller, useForm } from "react-hook-form";

interface CommunityImageProps {image:string}

interface FormProps{
    image:string;
}

interface FilePickerProps{
    onImageChange: (files:File) => void;
}

const CommunityImage = ({image}:CommunityImageProps) =>{
    
    // eslint-disable-next-line
    const [isShowed, setShowed] = useState(true);

    const { control, handleSubmit } = useForm<FormProps>();

    const [currentImage, setCurrentImage] = useState<string>(image);

    const onImageChange = (file:File) =>{
        setCurrentImage(URL.createObjectURL(file));
    }

    const onSubmit = (data:FormProps) => {
        console.log(data.image)
    };

    return(
        <div className={s_style.settings_left__image_container} onMouseEnter={()=>setShowed(true)} onMouseLeave={()=>setShowed(false)}>
            <img src={currentImage} alt="community" />
            <form onSubmit={handleSubmit(onSubmit)} className={s_style.image_container__change_image_box}>
                <Controller
                    name="image"
                    control={control}
                    render={({field: { onChange } }) => <ImageFilePicker onImageChange={val=>{
                        onImageChange(val);
                        onChange(val);
                    }}/>}
                    />
            </form>
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