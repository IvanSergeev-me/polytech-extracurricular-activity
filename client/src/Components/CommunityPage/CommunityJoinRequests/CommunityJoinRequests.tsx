import React from 'react'
import { withCommunityRights } from '../../HOC/withCommunityRights';
import r_style from './CommunityJoinRequests.module.scss';

const CommunityJoinRequests = () => {
  return (
    <div className={r_style.main_content__requests_section}>
        CommunityJoinRequests
    </div>
  )
}

export default withCommunityRights(CommunityJoinRequests, ['canEditRequests']);