import { createSelector } from 'reselect';
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

export const selectCommunity = createSelector(
    [communitySelector],
    (community) => community, 
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

export const selectUserFirstLetters = createSelector(
    [userSelector],
    (user) =>{
        if(user){
            let letter1= user.lastname.charAt(0).toUpperCase();
            let letter2 = user.name.charAt(0).toUpperCase();
            let firstLetters = letter1+letter2;
            return(firstLetters)
        }
        return("")
    }
);

export const selectIsAuth = createSelector(
    [isAuthSelector],
    (isAuth) => isAuth
)