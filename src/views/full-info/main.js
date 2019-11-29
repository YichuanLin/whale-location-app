import React, { useState } from "react";
import WhaleList from "../../views/whale-list";
import Dropdown from "../../components/dropdown";
import SummaryInfo from "../whale-summary";
import WhaleMap from "../whale-map";
import WithListRedux from "../../components/with-list-redux";

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

export const FullInfo = () => {
  const [isListView, setIsListView] = useState(true);
  const [isMapView, setIsMapView] = useState(true);
  const [specie, setSpice] = useState(null);

  const changeHandler = specie => {
    setSpice(specie);
  };

  return (
    <WithListRedux specie={specie}>
      <div className="full-info full-info__grid">
        <div className="full-info__cell--first-row full-info__cell--half-width--left">
          <div className="full-info__spice-field">
            <label>Spiece: </label>
            <Dropdown
              id="full-info__dropdown"
              options={OPTIONS_SPECIES}
              onChange={changeHandler}
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
                onChange={() =>
                  setIsListView(prevIsListView => !prevIsListView)
                }
                checked={isListView}
              />
              List
            </span>
            <span>
              <input
                type="checkbox"
                value="map"
                onChange={() => setIsMapView(prevIsMapView => !prevIsMapView)}
                checked={isMapView}
              />
              Map
            </span>
          </div>
        </div>
        <div className="full-info__cell--half-width full-info__cell--half-width--left">
          {isListView && <WhaleList />}
        </div>
        <div className="full-info__cell--half-width full-info__cell--half-width--right">
          {isMapView && <WhaleMap specie={specie} />}
        </div>
        <div className="full-info__cell--last-row">
          <SummaryInfo />
        </div>
      </div>
    </WithListRedux>
  );
};
