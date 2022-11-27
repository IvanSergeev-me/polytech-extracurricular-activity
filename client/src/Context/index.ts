import { useState } from "react";
import { createContainer } from "react-tracked";

export interface CommunityContextContent {
    isHidden:boolean,
}
const communityState:CommunityContextContent = {isHidden:true}

const useCommunityValue = () => useState(communityState);

export const { Provider:CommunityProvider, useTrackedState:useCommunityContext, useUpdate:useCommunityUpdate } = createContainer(useCommunityValue);