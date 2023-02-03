import { createAsyncThunk } from "@reduxjs/toolkit";
 
export const setAppStatusThunk = createAsyncThunk(
    "community/setAppStatus",
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

export const setJoinRequestsThunk = createAsyncThunk(
    "community/setJoinRequests",
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


