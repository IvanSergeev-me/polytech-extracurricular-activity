import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { activitiesAPi } from "../API/activities";
import reducers from "./Reducers/index"

let rootReducer = combineReducers(reducers);

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer, 
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(activitiesAPi.middleware),
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];

