import { IJoinRequest } from "Models/Community";
import { IMemberShort} from "../../../Models/User";
import { EventTypeShort } from "Models/Activities";

export interface eventState{
    isLoading: boolean;
    error:string;
    members:IMemberShort[];
    info:EventTypeShort;
    joinRequests:IJoinRequest[];
}