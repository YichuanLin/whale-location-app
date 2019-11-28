import { ACTIONS } from "./actions";

export const fullInfoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_ITEM:
      return {
        ...state,
        selectedItemId: action.payload
      };
    case ACTIONS.UPDATE_SPECIE:
      return {
        ...state,
        specie: action.payload,
        selectedItemId: null
      };
    case ACTIONS.TOGGLE_MAP_VIEW:
      return {
        ...state,
        isMapView: !state.isMapView
      };
    case ACTIONS.TOGGLE_LIST_VIEW:
      return {
        ...state,
        isListView: !state.isListView
      };
    default:
      return state;
  }
};
