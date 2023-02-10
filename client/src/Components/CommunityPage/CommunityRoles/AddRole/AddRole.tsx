import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import ro_style from "../CommunityRoles.module.scss";
import 'reactjs-popup/dist/index.css';
import "../PopupSettings.scss";
import EditRoleForm from '../EditRoleForm/EditRoleForm';
import { IMemberShort } from 'Models/User';
import { RoleRightName } from 'Models/RolesAndRights';

const AddRoleContainer = () => {

  const [isOpen, setOpen] = useState<boolean>(false);

  const setIsOpen = () => {
    setOpen(true)
  }

  const closePopup = () => {
    setOpen(false);
  }

  return (
    <Popup className={"roles_settings"}
      modal={true}
      onOpen={setIsOpen}
      open={isOpen}
      onClose={closePopup}
      trigger={<button className={ro_style.add_button}><span>+</span><span>Добавить</span></button>}>
       <EditRoleForm closePopup={closePopup} id={0} members={[] as IMemberShort []} name={""} rights={[] as RoleRightName[]}/>
    </Popup>

  )
}

export default AddRoleContainer;