import { ACTIONS } from "./actions";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "DATA_UPDATED":
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false
      };
    case "FETCH_STARTED":
      return {
        ...state,
        error: null,
        loading: true
      };
    case "ERROR_OCCURRED":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
