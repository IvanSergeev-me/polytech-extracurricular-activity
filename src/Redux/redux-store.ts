import { configureStore, combineReducers } from "@reduxjs/toolkit"
import reducers from "./Reducers/index"

let rootReducer = combineReducers(reducers);

export const setupStore = () => {
    return configureStore({reducer:rootReducer})
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];

/*import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducers from "./Reducers/index"

let rootReducer = combineReducers(reducers);


export const store = createStore (rootReducer, applyMiddleware(thunkMiddleware));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;*/

