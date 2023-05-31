import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActivitiesApi } from "API/activities-api";
import { getActivitiesParams } from "Models/Activities";

export const getActivitiesThunk = createAsyncThunk(
    "activities/getActivities",
    async(queryParams:getActivitiesParams, thunkAPI) =>
    {
        try {
            const response = await ActivitiesApi.getActivityCards(queryParams.page, queryParams.size);
            
            return response.data.data;

        } catch (error:any) {
            console.log(error);
            
            return thunkAPI.rejectWithValue(error)
        }
        
    }
);