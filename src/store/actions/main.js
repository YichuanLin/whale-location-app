import {
  ACTIONS as whaleListActions,
  ACTIONS_CREATOR as whaleListActionsCreator
} from "./whale-list";
import {
  ACTIONS as whaleDetailActions,
  ACTIONS_CREATOR as whaleDetailActionsCreator
} from "./whale-detail";

export const ACTIONS = {
  ...whaleListActions,
  ...whaleDetailActions
};

export const ACTIONS_CREATOR = {
  ...whaleListActionsCreator,
  ...whaleDetailActionsCreator
};
