import React, { useState } from "react";
import s_style from "./CommunitySettings.module.css";

interface CommunityImageProps {image:string}

const CommunityImage = ({image}:CommunityImageProps) =>{
    const [isShowed, setShowed] = useState(true);

    return(
        <div className={s_style.settings_left__image_container} onMouseEnter={()=>setShowed(true)} onMouseLeave={()=>setShowed(false)}>
            <img src={image} alt="community" />
            {isShowed && 
                <div className={s_style.image_container__change_image_box}>
                    <p>Изменить изображение</p>
                </div>}
        </div>
    )
}
export default CommunityImage;