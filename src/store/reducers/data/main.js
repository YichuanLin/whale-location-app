import { ACTIONS } from "./actions";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DATA_UPDATED:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false
      };
    case ACTIONS.FETCH_STARTED:
      return {
        ...state,
        error: null,
        loading: true
      };
    case ACTIONS.ERROR_OCCURRED:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
