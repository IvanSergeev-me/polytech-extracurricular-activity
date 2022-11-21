export enum defaultStatuses{
    APP_SENT = "APPLICATION_SENT",
    APP_NOT_SENT = "APPLICATION_NOT_SENT",
    APP_REJECTED = "APPLICATION_REJECTED",
    APP_ACCEPTED = "APPLICATION_ACCEPTED"
}

export type ActivityInfoApplicationStatus = `actioninfo/${defaultStatuses}`;
