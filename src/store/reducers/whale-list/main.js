import { ACTIONS } from "../../actions";

const INITIAL_STATE = { loading: null, list: null, error: null };

export const whaleListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.WHALE_LIST_FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ACTIONS.WHALE_LIST_FETCH_DATA_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        specie: action.payload.specie,
        loading: false
      };
    case ACTIONS.WHALE_LIST_FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
