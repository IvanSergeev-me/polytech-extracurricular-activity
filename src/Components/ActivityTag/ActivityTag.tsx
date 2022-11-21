import React, {FC} from "react";
import { ITag } from "../../Models/Activities";
import style from "./ActivityTag.module.css"

const ActivityTag:FC<ITag> = (props) =>{
    return(
        <div style={{background: props.color}} className={style.tag}>
            <span>{props.name}</span>
        </div>
    );
}
export default ActivityTag;