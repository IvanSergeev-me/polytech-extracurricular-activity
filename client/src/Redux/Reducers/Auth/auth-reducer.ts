import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../Models/User";
import { loginThunk, logoutThunk } from "./action-creators";
import { authState } from "./types";

export let initialState:authState = {
    isLoading:false,
    isAuth:true,
    user:{id:0, name:"Иван",middlename:"Николаевич", lastname:"Сергеев",group:"191-361", activitiesMember:[1,3,5], role:"admin", login:"Sergeev"},
    error:"",
}

export const authSlice = createSlice({
    name:"authSlice",
    initialState:initialState,
    reducers:{
        setIsLoading(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setError(state, action:PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        setUser(state, action:PayloadAction<IUser>){
            state.user = action.payload;
        },
        setIsAuth(state, action:PayloadAction<boolean>){
            state.isAuth = action.payload;
        },
    },
    extraReducers:{
        [loginThunk.fulfilled.type]:(state, action:PayloadAction<IUser>)=>{
            state.user = action.payload;
            state.isAuth = true;
            state.error = "";
            state.isLoading = false;
        },
        [loginThunk.pending.type]:(state, action)=>{
            state.isLoading = true;
        },
        [loginThunk.rejected.type]:(state, action:PayloadAction<string>)=>{
            state.error = action.payload;
            state.isLoading = false;
        },
        [logoutThunk.fulfilled.type]:(state, action:PayloadAction<IUser>)=>{
            state.user = {} as IUser;
            state.isAuth = false;
            state.isLoading = false;
        }
    }
});

export default authSlice.reducer;