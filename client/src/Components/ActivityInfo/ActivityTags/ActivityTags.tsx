import React from 'react';
import {ITag } from '../../../Models/Activities';
import ActivityTag from '../../Common/ActivityTag/ActivityTag';
import style from "../ActivityInfo.module.scss";

type ActivityTagsProps = {
    tags:ITag[]
}

export const ActivityTags = ({ tags }: ActivityTagsProps) => {
    return (
        <div className={style.top__tags_container}>
            {tags.map(tag => <ActivityTag id={tag.id} key={tag.id} color={tag.color} name={tag.name} />)}
        </div>
    )
}