import React, {FC} from "react";
import style from "../CommunityPage.module.css"
import {useCommunityContext} from "../../../Context/index";

interface AsideProps {
    isHidden: boolean
}

export const AsidePanel:FC<AsideProps> = (props) =>{
    //const [isHidden, changeHidden] = useState(props.isHidden);
    const {isHidden} = useCommunityContext();


    if(isHidden) return null;
    return(
        <div className={style.community_page_container__aside_content}>
            Участники
        </div>
    )
}