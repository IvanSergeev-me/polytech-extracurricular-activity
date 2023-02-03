import React from 'react'
import { withCommunityRights } from '../../HOC/withCommunityRights';
import r_style from './CommunityJoinRequests.module.scss';
import style from "../CommunityPage.module.scss";
import { useTypedSelector } from '../../../Hooks/useTypedSelector';
import { selectCommunityJoinRequests } from '../../../Selectors';
import JoinRequestCard from './JoinRequestCard/JoinRequestCard';

const CommunityJoinRequests = () => {

  return (
    <div className={r_style.main_content__requests_section}>
        <h2 className={style.title}>Заявки на вступление</h2>
        <JoinRequestsContainer />
    </div>
  )
}

const JoinRequestsContainer = () => {

  const joinRequests = useTypedSelector(selectCommunityJoinRequests);

  return (
    <div className={r_style.requests_section__requests_container}>
      {joinRequests.map(jr => <JoinRequestCard 
                                key={jr.id} 
                                id={jr.id} 
                                group={jr.group} 
                                lastname={jr.lastname} 
                                name={jr.name} 
                                time={jr.time} 
                                image={jr.image} 
                                date={jr.date}/>)}
    </div>
  )
}

export default withCommunityRights(CommunityJoinRequests, ['canEditRequests']);