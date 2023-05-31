import { instance } from "./response-types";

export const ProfileApi = {
    getCommunitiesCards(userId: number) {
        return instance.get<any>(`profile/communities`, {
            params:{
                "user_id":userId
            },
            withCredentials: true,
        });
    },
};