import React, { useReducer } from "react";
import WhaleList from "../../views/whale-list";
import Dropdown from "../../components/dropdown";
import SummaryInfo from "../summary-info";
import WhaleMap from "../whale-map";
import fullInfoReducer, {
  selectItem,
  updateSpecie,
  toggleListView,
  toggleMapView
} from "../../reducers/full-info";

import "./main.css";

const SPECIES = [
  "orca",
  "minke",
  "gray whale",
  "humpback",
  "atlantic white-sided dolphin",
  "pacific white-sided dolphin",
  "dalls porpoise",
  "harbor porpoise",
  "harbor seal",
  "northern elephant seal",
  "southern elephant seal",
  "california sea Lion",
  "steller sea lion",
  "sea otter",
  "other and unknown"
];

const NO_SELECT_ITEM = {
  value: "",
  label: "Select an option..."
};

const OPTIONS_SPECIES = [
  NO_SELECT_ITEM,
  NO_SELECT_ITEM,
  ...SPECIES.map(specie => ({
    value: specie,
    label: specie.toUpperCase()
  }))
];

const INITIAL_STATE = {
  specie: null,
  selectedItemId: null,
  isMapView: true,
  isListView: true
};

export const FullInfo = () => {
  const [
    { specie, selectedItemId, isListView, isMapView },
    dispatch
  ] = useReducer(fullInfoReducer, INITIAL_STATE);
  const onChangeSpecie = specie => {
    dispatch(updateSpecie(specie));
  };
  const onSelectedItem = id => {
    dispatch(selectItem(id));
  };
  return (
    <div className="full-info full-info__grid">
      <div className="full-info__cell--first-row full-info__cell--half-width--left">
        <div className="full-info__spice-field">
          <label>Spiece: </label>
          <Dropdown
            id="full-info__dropdown"
            options={OPTIONS_SPECIES}
            onChange={onChangeSpecie}
          />
        </div>
      </div>
      <div className="full-info__cell--first-row full-info__cell--half-width--right">
        <div className="full-info__spice-field">
          <label>View: </label>
          <span>
            <input
              type="checkbox"
              value="list"
              onChange={() => dispatch(toggleListView())}
              checked={isListView}
            />
            List
          </span>
          <span>
            <input
              type="checkbox"
              value="map"
              onChange={() => dispatch(toggleMapView())}
              checked={isMapView}
            />
            Map
          </span>
        </div>
      </div>
      <div className="full-info__cell--half-width full-info__cell--half-width--left">
        {isListView && (
          <WhaleList
            specie={specie}
            onSelectedItem={onSelectedItem}
            selectedItem={selectedItemId}
          />
        )}
      </div>
      <div className="full-info__cell--half-width full-info__cell--half-width--right">
        {isMapView && (
          <WhaleMap
            specie={specie}
            onSelectedItem={onSelectedItem}
            selectedItem={selectedItemId}
          />
        )}
      </div>
      <div className="full-info__cell--last-row">
        <SummaryInfo id={selectedItemId} />
      </div>
    </div>
  );
};
