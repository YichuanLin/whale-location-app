export const ACTIONS = {
  WHALE_DETAIL_FETCH_DATA_SUCCESS: "WHALE_DETAIL/FETCH_DATA_SUCCESS",
  WHALE_DETAIL_FETCH_DATA_START: "WHALE_DETAIL/FETCH_DATA_START",
  WHALE_DETAIL_FETCH_DATA_FAIL: "WHALE_DETAIL/FETCH_DATA_FAIL",
  WHALE_DETAIL_WHALE_SELECTED: "WHALE_DETAIL/WHALE_SELECTED"
};

const whaleDetailFetchDataStart = () => ({
  type: ACTIONS.WHALE_DETAIL_FETCH_DATA_START
});

const whaleDetailFetchDataSuccess = data => ({
  type: ACTIONS.WHALE_DETAIL_FETCH_DATA_SUCCESS,
  payload: data
});

const whaleDetailFetchDataFail = error => ({
  type: ACTIONS.WHALE_DETAIL_FETCH_DATA_FAIL,
  payload: error
});

const whaleDetailWhaleSelected = id => ({
  type: ACTIONS.WHALE_DETAIL_WHALE_SELECTED,
  payload: id
});

export const ACTIONS_CREATOR = {
  whaleDetailFetchDataStart,
  whaleDetailFetchDataSuccess,
  whaleDetailFetchDataFail,
  whaleDetailWhaleSelected
};
