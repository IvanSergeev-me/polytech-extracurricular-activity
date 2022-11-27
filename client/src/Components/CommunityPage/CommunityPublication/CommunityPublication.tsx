import React, {FC} from "react"
import {ICommunityPublication} from "../../../Models/Community/index"

export const CommunityPublication:FC<ICommunityPublication> = (props) =>{
    return(
        <div>
            {props.id}
        </div>
    )
}