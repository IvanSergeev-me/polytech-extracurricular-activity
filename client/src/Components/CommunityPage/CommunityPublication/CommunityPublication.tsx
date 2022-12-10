import React, {FC} from "react";
import {ICommunityPublication, IPublicationImage} from "../../../Models/Community/index";
import style from "../CommunityPage.module.css";

export const CommunityPublication:FC<ICommunityPublication> = (props) =>{
    return(
        <div className={style.posts__post_container}>
            {props.images?<div className={style.post_container__images}>
                {props.images?.map(image => <PublicationImage key={image.id} id={image.id} image={image.image}/>)}
            </div>:null}
            <div className={style.post_container__post_content}>
                <div className={style.post_content__post_top}>
                    <h2 className={style.post_top__title}>{props.title}</h2>
                    <span className={style.post_top__date}>{props.date}</span>
                </div>
                <p className={style.post_content__text}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export const PublicationImage:FC<IPublicationImage> = (props) =>{
    return(
        <div className={style.images__image_container}>
            <img src={props.image} alt="content" />
        </div>
    )
}