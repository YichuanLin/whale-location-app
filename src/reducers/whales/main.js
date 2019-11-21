import { ACTIONS } from "./actions";

export const whalesReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LIST_UPDATED:
      return {
        ...state,
        list: action.payload,
        error: null,
        isFetching: false
      };
    case ACTIONS.LOADING_STARTED:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case ACTIONS.ERROR_OCCURRED:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
