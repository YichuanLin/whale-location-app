export const ACTIONS = {
  SELECT_ITEM: "SELECT_ITEM",
  UPDATE_SPECIE: "UPDATE_SPECIE",
  TOGGLE_MAP_VIEW: "TOGGLE_MAP_VIEW",
  TOGGLE_LIST_VIEW: "TOGGLE_LIST_VIEW"
};

export const selectItem = id => ({
  type: ACTIONS.SELECT_ITEM,
  payload: id
});

export const updateSpecie = spiece => ({
  type: ACTIONS.UPDATE_SPECIE,
  payload: spiece
});

export const toggleMapView = () => ({
  type: ACTIONS.TOGGLE_MAP_VIEW
});

export const toggleListView = () => ({
  type: ACTIONS.TOGGLE_LIST_VIEW
});
