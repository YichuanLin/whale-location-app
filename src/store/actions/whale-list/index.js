import { whaleList } from "../../../resources/whale-list";

export const ACTIONS = {
  WHALE_LIST_GET_WHALE_LIST: "WHALE_LIST/GET_WHALE_LIST",
  WHALE_LIST_FETCH_DATA_START: "WHALE_LIST/FETCH_DATA_START",
  WHALE_LIST_FETCH_DATA_SUCCESS: "WHALE_LIST/FETCH_DATA_SUCCESS",
  WHALE_LIST_FETCH_DATA_FAIL: "WHALE_LIST/FETCH_DATA_FAIL"
};

const whaleListFetchDataStart = () => ({
  type: ACTIONS.WHALE_LIST_FETCH_DATA_START
});

const whaleListFetchDataSuccess = ({ list, specie }) => ({
  type: ACTIONS.WHALE_LIST_FETCH_DATA_SUCCESS,
  payload: {
    list,
    specie
  }
});

const whaleListFetchDataFail = error => ({
  type: ACTIONS.WHALE_LIST_FETCH_DATA_FAIL,
  payload: error
});

const getWhaleList = specie => {
  return async (dispatch, getState, axios) => {
    dispatch(whaleListFetchDataStart());
    const state = getState();
    if (
      state.whaleList &&
      state.whaleList.specie === specie &&
      state.whaleList.list
    ) {
      dispatch(
        whaleListFetchDataSuccess({ list: state.whaleList.list, specie })
      );
      return;
    }
    try {
      const response = await axios.get(whaleList.getUrl(specie));
      dispatch(whaleListFetchDataSuccess({ list: response.data, specie }));
    } catch (error) {
      dispatch(whaleListFetchDataFail(error));
    }
  };
};

export const ACTIONS_CREATOR = {
  getWhaleList
};
