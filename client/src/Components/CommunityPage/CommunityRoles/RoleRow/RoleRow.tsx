import React, { useState } from 'react';
import { RoleAndMembers } from '../../../../Models/RolesAndRights/index';
import ro_style from "../CommunityRoles.module.scss";
import ThreeDots from "Assets/Images/ThreeDots.svg";
import Members from "Assets/Images/members.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../PopupSettings.scss";
import EditRoleForm from '../EditRoleForm/EditRoleForm';

const RoleRow = ({ id, members, name, rights }: RoleAndMembers) => {

    const [isOpen, setOpen] = useState<boolean>(false);

    const setIsOpen = () =>{
        setOpen(true)
    }

    const closePopup = () =>{
        setOpen(false);
    }

    return (
        <li className={ro_style.rows__role_row}>
            <div className={ro_style.role_row__name}>
                {name}
            </div>
            <div className={ro_style.role_row__info_controls}>
                <div className={ro_style.info_controls__members}><span>{members.length}</span><img src={Members} alt={"Members"} /></div>
                <div className={ro_style.info_controls__more_button}>
                    <Popup className={"roles_settings"}
                        modal={true}
                        onOpen={setIsOpen}
                        open={isOpen}
                        onClose={closePopup}
                        trigger={<img src={ThreeDots} alt={"settings"} />}>
                        <EditRoleForm closePopup={closePopup} id={id} members={members} name={name} rights={rights}/>
                    </Popup>
                </div>
            </div>
        </li>
    )
}

export default RoleRow;
