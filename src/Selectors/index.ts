import { createSelector } from 'reselect';
import { RootState } from '../Redux/redux-store';

//Todo: декомпозировать файл селекторов

const activitiesSelector = (state:RootState) => state.activitiesReducer;

const activityInfoSelector = (state:RootState) => state.activityInfoReducer.activity;

const userSelector = (state:RootState) => state.authReducer.user;

export const appStatusSelector = (state:RootState) => state.activityInfoReducer.appStatus;

export const selectActivities = createSelector(
    [activitiesSelector],
    (activities) => activities.activities,
)

export const selectActivity = createSelector(
    [activityInfoSelector],
    (activityInfo) => activityInfo, 
)
export const selectAppStatus = createSelector(
    [appStatusSelector],
    (appStatus) => appStatus, 
)

export const selectUserFirstLetters = createSelector(
    [userSelector],
    (user) =>{

    }
)