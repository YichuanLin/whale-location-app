import { createSelector } from "reselect";
import { parseError } from "../utils";

export const whaleDetailSelector = state => state.whaleDetail;

export const whaleDetailToSummarySelector = createSelector(
  whaleDetailSelector,
  whaleDetail => {
    const { detail } = whaleDetail;
    return (
      detail && {
        id: detail.id,
        species: detail.species,
        quantity: detail.quantity || 0,
        location: detail.location
      }
    );
  }
);

export const whaleDetailToDetailSelector = createSelector(
  whaleDetailSelector,
  whaleDetail => whaleDetail.detail
);

export const whaleDetailToErrorSelector = createSelector(
  whaleDetailSelector,
  whaleDetail => parseError(whaleDetail.error)
);
