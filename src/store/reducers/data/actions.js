export const ACTIONS = {
  DATA_UPDATED: "DATA_UPDATED",
  FETCH_STARTED: "FETCH_STARTED",
  ERROR_OCCURRED: "ERROR_OCCURRED"
};

export const dataUpdate = data => ({
  type: ACTIONS.DATA_UPDATED,
  payload: data
});

export const errorOccurred = error => ({
  type: ACTIONS.ERROR_OCCURRED,
  payload: error
});

export const fetchStarted = () => ({ type: ACTIONS.FETCH_STARTED });
