import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
    "auth/login",
    async(_, thunkAPI) =>
    {
        try {
            const response = null;
            return response;
             
        } catch (error) {
            return thunkAPI.rejectWithValue("error")
        }
        
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async(_, thunkAPI) =>
    {
        try {
            const response = null;
            return response;
             
        } catch (error) {
            return thunkAPI.rejectWithValue("error")
        }
        
    }
);