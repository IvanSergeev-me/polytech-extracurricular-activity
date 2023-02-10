import React from 'react';
import { withCommunityRights } from '../../HOC/withCommunityRights';
import ro_style from "./CommunityRoles.module.scss";
import style from "../CommunityPage.module.scss";
import AddRoleForm from './AddRole/AddRole';
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { selectCommunityRoles } from 'Selectors';
import RoleRow from './RoleRow/RoleRow';

const CommunityRoles = () => {
  return (
    <div className={ro_style.main_content__roles_section}>
        <h2 className={style.title}>Роли участников</h2>
        <div className={ro_style.roles_section__roles_rows_container}>
          <AddRoleForm />
          <RolesContainer />
        </div>
    </div>
  )
}

const RolesContainer = () =>{

  const roles = useTypedSelector(selectCommunityRoles);

  return(
    <ul className={ro_style.roles_rows_container__rows}>
      {roles.map(r => <RoleRow id={r.id} key={r.id} members={r.members} name={r.name} rights={r.rights}/>)}
    </ul>
  )
}

export default withCommunityRights(CommunityRoles, ['canEditRoles']);
