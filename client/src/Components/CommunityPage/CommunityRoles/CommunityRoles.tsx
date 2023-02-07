import React from 'react';
import { withCommunityRights } from '../../HOC/withCommunityRights';
import ro_style from "./CommunityRoles.module.scss"

const CommunityRoles = () => {
  return (
    <div className={ro_style.main_content__roles_section}>
        CommunityRoles
    </div>
  )
}

export default withCommunityRights(CommunityRoles, ['canEditRoles']);
