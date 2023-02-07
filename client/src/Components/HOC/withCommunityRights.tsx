import { useTypedSelector } from 'Hooks/useTypedSelector';
import React from 'react';
import { communityRightsSelector } from 'Selectors';
import { RoleRightName} from '../../Models/RolesAndRights';

//Смысл этого хока в том, чтобы передавать id сообщества и список прав, чтобы выяснить, обладает ли ими пользователь в конкретном сообществе. 

export const withCommunityRights = <P extends object>(Component: React.ComponentType<P>, community_rights:RoleRightName[]) => {
    return ({ ...props}) => {

        const isAllowed = useCommunityRight(community_rights);

        return(
            isAllowed?<Component {...props as P} />:null
        )
    }
}   

const useCommunityRight = (community_rights:RoleRightName[]) =>{

    const rights = useTypedSelector(communityRightsSelector);
    for (const right of community_rights) {
        if(!rights.some(r=> r === right)){
            return false;
        }
    }

    return true;
}
  