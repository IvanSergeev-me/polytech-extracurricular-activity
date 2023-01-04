import React, {FC} from "react";
import {ICommunityPublication, IPublicationImage} from "../../../Models/Community/index";
import style from "../CommunityPage.module.css";
import classNames from "classnames/bind";

export const CommunityPublication:FC<ICommunityPublication> = (props) =>{
    const cx = classNames.bind(style);
    const postImagesClass = cx({
        post_container__images: true,
        images_1el:props.images?.length===1,
        images_2el:props.images?.length===2,
        images_3el:props.images?.length===3,
        images_4el:props.images?.length===4,
        images_many_el:(props.images?.length && props.images?.length > 4),
      });
    return(
        <div className={style.posts__post_container}>
            {props.images?<div className={postImagesClass}>
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