import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IActivityCard } from '../Models/Activities';

const baseUrl = "/api/actvitivies/";

export const activitiesAPi = createApi({
    reducerPath:"activitiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
      }),
    endpoints: (build) => ({
        getActivities: build.query<IActivityCard[], number>({
            query:(limit = 0)=>({
                url:"get-cards",
                params:{limit:limit}
            }),
        }),
    })
})

export const {useGetActivitiesQuery} = activitiesAPi;