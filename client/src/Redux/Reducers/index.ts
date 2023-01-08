import activitiesReducer from "./Activities/activities-reducer";
import authReducer from "./Auth/auth-reducer";
import activityInfoReducer from "./ActivityInfo/activityInfo-reducer";
import communityReducer from "./Community/community-reducer";
import profileReducer from "./Profile/profile-reducer";
import { activitiesAPi } from "../../API/activities";

// eslint-disable-next-line
export default {
    activitiesReducer,
    authReducer,
    activityInfoReducer,
    communityReducer,
    profileReducer,
    [activitiesAPi.reducerPath]:activitiesAPi.reducer
}