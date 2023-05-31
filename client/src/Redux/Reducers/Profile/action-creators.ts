import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileApi } from "API/profile-api";

export const getCommunitiesInProfileThunk = createAsyncThunk(
    "getActivitiesInProfileThunk/",
    async(userId:number, thunkAPI) =>
    {
        try {
            const response = await ProfileApi.getCommunitiesCards(userId);
            return response.data.data;
             
        } catch (error) {
            return thunkAPI.rejectWithValue("error")
        }
        
    }
);