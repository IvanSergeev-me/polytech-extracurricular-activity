export enum defaultStatuses{
    APP_SENT = "APPLICATION_SENT",
    APP_NOT_SENT = "APPLICATION_NOT_SENT",
    APP_REJECTED = "APPLICATION_REJECTED",
    APP_ACCEPTED = "APPLICATION_ACCEPTED"
}

export type ActivityInfoApplicationStatus = `activityinfo/${defaultStatuses}`;

export type ApplicationGlossary = Record<defaultStatuses, string>;

export const activityApplicationGlossary:ApplicationGlossary = {
    APPLICATION_SENT:`activityinfo/${defaultStatuses.APP_SENT}`,
    APPLICATION_NOT_SENT:`activityinfo/${defaultStatuses.APP_NOT_SENT}`,
    APPLICATION_REJECTED:`activityinfo/${defaultStatuses.APP_REJECTED}`,
    APPLICATION_ACCEPTED:`activityinfo/${defaultStatuses.APP_ACCEPTED}`,
}
