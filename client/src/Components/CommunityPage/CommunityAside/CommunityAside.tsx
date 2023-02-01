import React, {FC} from "react";
import {useCommunityContext, useCommunityUpdate} from "../../../Context/index";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectCommunityMembers } from "../../../Selectors";
import { IMember } from "../../../Models/User";
import { ICommunityRole } from "../../../Models/RolesAndRights";
import ap_style from "./CommunityAside.module.scss";
import { useFirstLetters } from "../../../Hooks/useFirstLetters";
import classNames from "classnames/bind";

interface AsideProps {
    isHidden: boolean
}

export const AsidePanel:FC<AsideProps> = (props) =>{
    const cx = classNames.bind(ap_style);

    const {isHidden} = useCommunityContext();

    const communityUpdate = useCommunityUpdate();

    const handleClose = () =>{
       communityUpdate((prev)=>({...prev, isHidden:!prev.isHidden}));
    }

    const asideClass = cx({
        community_page_container__aside_content:true,
        aside_closed:isHidden,
        aside_opened:!isHidden
    })

    const members = useTypedSelector(selectCommunityMembers);

    return(
        <div className={asideClass}>
            <div className={ap_style.aside_content__top}>
                <h2>{members.length} участников</h2>
                <div className={ap_style.top__close_button} onClick={handleClose}>Закрыть</div>
            </div>
            <div className={ap_style.aside_content__members_container}>
                {members.map(member => <AsideMember id={member.id} image={member.image} key={member.id} name={member.name} lastname={member.lastname} roles={member.roles}/>)}
            </div>
        </div>
    )
}

const AsideMember:FC<IMember> = (props) =>{

    const roles = props.roles.map((role,index) => <AsideRole key={index} name={ role.name + (index !== props.roles.length-1?",":"")} rights={role.rights}/>);
    // eslint-disable-next-line
    const letters = useFirstLetters([props.lastname, props.name])

    return(
        <div className={ap_style.members_container__aside_member}>
            <div className={ap_style.aside_member__image}>
                {props.image?<img src={props.image} alt="member" />:<div>{ letters }</div>}
            </div>
            <div className={ap_style.aside_member__aside_info}>
                <h3 className={ap_style.aside_info__member_name}>
                    <span>{props.name}</span>
                    <span>{props.lastname}</span>
                </h3>
                <div className={ap_style.aside_info__aside_roles}>
                    {roles}
                </div>
            </div>
        </div>
    )
}

const AsideRole:FC<ICommunityRole> = (props) =>{
    return(
        <div className={ap_style.aside_roles__role}>{props.name}</div>
    )
}