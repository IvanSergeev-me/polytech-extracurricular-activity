import { createSelector } from 'reselect';
import { getFirstLetters } from '../Assets/Images/Utils/getFirstLetters';
import { RootState } from '../Redux/redux-store';

//Todo: декомпозировать файл селекторов

const activitiesSelector = (state:RootState) => state.activitiesReducer;

const activityInfoSelector = (state:RootState) => state.activityInfoReducer.activity;

const userSelector = (state:RootState) => state.authReducer.user;

const communitySelector = (state:RootState) => state.communityReducer;

const isAuthSelector = (state:RootState) => state.authReducer.isAuth;

export const appStatusSelector = (state:RootState) => state.activityInfoReducer.appStatus;

export const selectActivities = createSelector(
    [activitiesSelector],
    (activities) => activities.activities,
);

export const selectActivity = createSelector(
    [activityInfoSelector],
    (activityInfo) => activityInfo, 
);

export const selectAppStatus = createSelector(
    [appStatusSelector],
    (appStatus) => appStatus, 
);

export const selectCommunityName = createSelector(
    [communitySelector],
    (community) => community.community_name, 
);

export const selectCommunityUserRoles = createSelector(
    //Select user roles in community and its rights
    [communitySelector],
    (community) => community, 
);

export const selectCommunityPosts = createSelector(
    [communitySelector],
    (community) => community.posts,
);

export const selectCommunitySchedule = createSelector(
    [communitySelector],
    (community) => community.schedule,
);

export const selectCommunityMembers = createSelector(
    [communitySelector],
    (community) => community.members,
);

// export const selectSubjectsByDay = createSelector(
//     [communitySelector],
//     (community, day) => ({
//         community.subjects.filter(s => s.day === props.day_name)
//     }),
// );

export const selectUserFirstLetters = createSelector(
    [userSelector],
    (user) =>{
        if(user){
            return(getFirstLetters([user.lastname, user.name]));
        }
        return("")
    }
);

export const selectUserId = createSelector(
    [userSelector],
    (user) => user?.id
)

export const selectIsAuth = createSelector(
    [isAuthSelector],
    (isAuth) => isAuth
)

