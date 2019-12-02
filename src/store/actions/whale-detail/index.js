import { whaleDetail } from "../../../resources/whale-detail";

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

const getWhaleDetail = id => {
  return async (dispatch, getState, axios) => {
    dispatch(whaleDetailFetchDataStart());
    const state = getState();
    if (
      state.whaleList &&
      state.whaleDetail.detail &&
      state.whaleDetail.detail.id === id
    ) {
      dispatch(whaleDetailFetchDataSuccess(state.whaleDetail.detail));
      return;
    }
    try {
      const response = await axios.get(whaleDetail.getUrl(id));
      dispatch(whaleDetailFetchDataSuccess(response.data));
    } catch (error) {
      dispatch(whaleDetailFetchDataFail(error));
    }
  };
};

export const ACTIONS_CREATOR = {
  getWhaleDetail
};
