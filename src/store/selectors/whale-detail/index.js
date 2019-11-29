import { createSelector } from "reselect";

export const whaleDetailSelector = state => state.whaleDetail;

export const whaleDetailToSummarySelector = createSelector(
  whaleDetailSelector,
  whaleDetail => {
    const { detail } = whaleDetail;
    console.log("detail", whaleDetail);
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
