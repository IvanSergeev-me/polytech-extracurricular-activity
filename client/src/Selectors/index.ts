import { createSelector } from 'reselect';
import { getFirstLetters } from '../Assets/Utils/getFirstLetters';
import { RootState } from '../Redux/redux-store';

//Todo: декомпозировать файл селекторов

const activitiesSelector = (state:RootState) => state.activitiesReducer;

const activityInfoSelector = (state:RootState) => state.activityInfoReducer.activity;

const userSelector = (state:RootState) => state.authReducer.user;

const communitySelector = (state:RootState) => state.communityReducer;

export const eventSelector = (state:RootState) => state.eventReducer;

const isAuthSelector = (state:RootState) => state.authReducer.isAuth;

const profileSelector = (state:RootState) => state.profileReducer;

export const achievementCardsSelector = (state:RootState) => state.profileReducer.achievements.achievementCards;

export const statisticsSelector = (state:RootState) => state.profileReducer.statistics;

export const activityGraphDataSelector = (state:RootState) => state.profileReducer.activityGraphData;

export const communityRightsSelector = (state:RootState) => state.communityReducer.userRights;

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

export const selectCommunityRoles = createSelector(
    [communitySelector],
    (community) => community.roles, 
);

export const selectCommunityPosts = createSelector(
    [communitySelector],
    (community) => community.posts,
);

export const selectCommunitySchedule = createSelector(
    [communitySelector],
    (community) => community.schedule,
);

export const selectCommunityInfo = createSelector(
    [communitySelector],
    (community) => community.info, 
);

export const selectCommunityJoinRequests = createSelector(
    [communitySelector],
    (community) => community.joinRequests, 
);

export const selectCommunityMembers = createSelector(
    [communitySelector],
    (community) => community.members,
);

export const selectUserFirstLetters = createSelector(
    [userSelector],
    (user) =>{
        if(user){
            return(getFirstLetters([user.lastname, user.name]));
        }
        return("")
    }
);

export const selectCommunitiesInProfile = createSelector(
    [profileSelector],
    (profile) => profile.communities,
);

export const selectEventsInProfile = createSelector(
    [profileSelector],
    (profile) => profile.events,
);

export const selectUsersRequests = createSelector(
    [profileSelector],
    (profile) => profile.userRequests,
);


export const selectUserId = createSelector(
    [userSelector],
    (user) => user?.id
);

export const selectIsAuth = createSelector(
    [isAuthSelector],
    (isAuth) => isAuth
);

