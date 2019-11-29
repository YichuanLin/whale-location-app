import { ACTIONS } from "../../actions";

const INITIAL_STATE = {
  detail: null,
  loading: false,
  error: null,
  id: null
};

export const whaleDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.WHALE_DETAIL_FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ACTIONS.WHALE_DETAIL_FETCH_DATA_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        loading: false
      };
    case ACTIONS.WHALE_DETAIL_FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ACTIONS.WHALE_DETAIL_WHALE_SELECTED:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
