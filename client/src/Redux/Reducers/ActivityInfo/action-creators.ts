import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActivitiesApi } from "API/activities-api";
 
export const getActivityInfoThunk = createAsyncThunk(
    "activityInfo/setInfo",
    async(activity_id:number, thunkAPI) =>
    {
        try {
            const response = await ActivitiesApi.getActivityInfo(activity_id);
            if (response.data.error) thunkAPI.rejectWithValue(response.data.error);
            else return response.data.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
        
    }
);