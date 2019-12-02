import { createSelector } from "reselect";
import { parseError } from "../utils";

export const whaleListSelector = state => state.whaleList;

export const whaleListToListSelector = createSelector(
  whaleListSelector,
  whaleList => whaleList.list && whaleList.list.map(({ id }) => ({ id }))
);

export const whaleListToMapSelector = createSelector(
  whaleListSelector,
  whaleList =>
    whaleList.list &&
    whaleList.list.map(({ id, latitude, longitude }) => ({
      id,
      latitude,
      longitude
    }))
);

export const whaleListToErrorSelector = createSelector(
  whaleListSelector,
  whaleList => parseError(whaleList.error)
);
