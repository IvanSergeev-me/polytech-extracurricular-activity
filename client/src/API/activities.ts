import {instance} from "./index";

export const ActivitiesAPi = {
    getActivities(){
        return instance.get<string>(`subjects.php`)
    },
};