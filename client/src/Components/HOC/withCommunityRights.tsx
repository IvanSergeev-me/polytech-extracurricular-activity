import React from 'react';
import { useParams } from 'react-router-dom';
import { RoleRightName} from '../../Models/RolesAndRights';

//Смысл этого хока в том, чтобы передавать id сообщества и список прав, чтобы выяснить, обладает ли ими пользователь в конкретном сообществе. 

export const withCommunityRights = <P extends object>(Component: React.ComponentType<P>, community_rights:RoleRightName[]) => {
    return ({ ...props}) => {
        let params = useParams();
        let community_id = params.id;
        let isAllowed = useCommunityRight(+community_id! ,community_rights);

        return(
            isAllowed?<Component {...props as P} />:null
        )
    }
}   


//TEST

let useCommunityRight = (community_id:number, community_rights:RoleRightName[]) =>{

    //let userId = useTypedSelector(selectUserId);
    return true;
}

//let a = useCommunityRight(1, ["canCreatePost"]);
  