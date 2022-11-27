import React, {FC} from "react";
import {ActivityType} from "../../Models/Activities/index"

interface ApplicationFormProps {
    activityType:ActivityType;
    onAppStatusSubmit:Function;
    communityId:number | undefined;
    appStatus:string;
}
 
const ApplicationForm: FC<ApplicationFormProps> = (props) => {
    return ( 
    <div>

    </div> );
}
 
export default ApplicationForm;