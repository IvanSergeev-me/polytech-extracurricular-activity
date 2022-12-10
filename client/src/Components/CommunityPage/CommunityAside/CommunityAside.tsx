import React, {FC, useCallback} from "react";
import style from "../CommunityPage.module.css"
import {useCommunityContext} from "../../../Context/index";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectCommunityMembers } from "../../../Selectors";
import { IMember } from "../../../Models/User";
import { CommunityRole } from "../../../Models/RolesAndRights";
import { getFirstLetters } from "../../../Assets/Images/Utils/getFirstLetters";

interface AsideProps {
    isHidden: boolean
}

export const AsidePanel:FC<AsideProps> = (props) =>{
    const {isHidden} = useCommunityContext();

    const members = useTypedSelector(selectCommunityMembers);

    if(isHidden) return null;

    return(
        <div className={style.community_page_container__aside_content}>
            <div className={style.aside_content__top}>
                <h2>{members.length} участников</h2>
            </div>
            <div className={style.aside_content__members_container}>
                {members.map(member => <AsideMember id={member.id} image={member.image} key={member.id} name={member.name} lastname={member.lastname} roles={member.roles}/>)}
            </div>
        </div>
    )
}

const AsideMember:FC<IMember> = (props) =>{

    const roles = props.roles.map((role,index) => <AsideRole key={index} name={ role.name + (index !== props.roles.length-1?",":"")} rights={role.rights}/>);
    // eslint-disable-next-line
    const firstLetters = useCallback(()=> getFirstLetters([props.lastname, props.name]), []);
    const letters = firstLetters();

    return(
        <div className={style.members_container__aside_member}>
            <div className={style.aside_member__image}>
                {props.image?<img src={props.image} alt="member" />:<div>{ letters }</div>}
            </div>
            <div className={style.aside_member__aside_info}>
                <h3 className={style.aside_info__member_name}>
                    <span>{props.name}</span>
                    <span>{props.lastname}</span>
                </h3>
                <div className={style.aside_info__aside_roles}>
                    {roles}
                </div>
            </div>
        </div>
    )
}

const AsideRole:FC<CommunityRole> = (props) =>{
    return(
        <div className={style.aside_roles__role}>{props.name}</div>
    )
}