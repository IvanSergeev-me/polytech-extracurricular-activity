import React, {FC} from "react";
//import { useParams } from "react-router-dom";
import { CommunityHeaderIfGuest, CommunityHeaderIfMember } from "./CommunityHeader/CommunityHeader";
import {AsidePanel} from "./CommunityAside/CommunityAside";
import style from './CommunityPage.module.css';
import { CommunityProvider } from "../../Context";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { selectCommunity } from "../../Selectors";
import CommunityPosts from "./CommunityPosts/CommunityPosts";
import { Routes } from "react-router-dom";
import AppRouter from "../Router/Router";
import { communityRoutes } from "../../Routes/routes";

const CommunityPage = () =>{
    return(
        <CommunityProvider>
            <CommunityPageContent />
        </CommunityProvider>
    )   
}

const CommunityPageContent:FC = (props) =>{
    //let params = useParams();
    let isMember = true; //temp
    let info_id = 1; //temp

    const community = useTypedSelector(selectCommunity);

    return(
        <section className={style.community_page_container}>
            <div className={style.community_page_container__main_content}>
                {isMember?<CommunityHeaderIfMember community_name={community.community_name} info_id={info_id}/>:<CommunityHeaderIfGuest />}
                <AppRouter routes={communityRoutes}/>
            </div>
            <AsidePanel isHidden={true}/>
        </section>
    )
}


/*const SendApplicationForm:FC = (props) =>{
    return(
        <div>

        </div>
    )
}

*/

export default CommunityPage;