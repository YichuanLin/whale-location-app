export const ACTIONS = {
  WHALE_LIST_FETCH_DATA_START: "WHALE_LIST/FETCH_DATA_START",
  WHALE_LIST_FETCH_DATA_SUCCESS: "WHALE_LIST/FETCH_DATA_SUCCESS",
  WHALE_LIST_FETCH_DATA_FAIL: "WHALE_LIST/FETCH_DATA_FAIL"
};

const whaleListFetchDataStart = () => ({
  type: ACTIONS.WHALE_LIST_FETCH_DATA_START
});

const whaleListFetchDataSuccess = data => ({
  type: ACTIONS.WHALE_LIST_FETCH_DATA_SUCCESS,
  payload: data
});

const whaleListFetchDataFail = error => ({
  type: ACTIONS.WHALE_LIST_FETCH_DATA_FAIL,
  payload: error
});

export const ACTIONS_CREATOR = {
  whaleListFetchDataStart,
  whaleListFetchDataSuccess,
  whaleListFetchDataFail
};
