import React, { useState } from "react";
import WhaleList from "../../views/whale-list";
import Dropdown from "../../components/dropdown";
import SummaryInfo from "../summary-info";
import WhaleMap from "../whale-map";

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
  const [spice, setSpice] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const onChangeSpice = value => {
    setSpice(value);
    setSelectedItemId(null);
  };
  const onSelectedItem = id => {
    setSelectedItemId(id);
  };
  return (
    <div className="full-info full-info__grid">
      <div className="full-info__cell--first-row">
        <div className="full-info__spice-field">
          <label>Spiece: </label>
          <Dropdown
            id="full-info__dropdown"
            options={OPTIONS_SPECIES}
            onChange={onChangeSpice}
          />
        </div>
      </div>
      <div className="full-info__cell--half-width full-info__cell--half-width--left">
        <WhaleList
          spices={spice}
          onSelectedItem={onSelectedItem}
          selectedItem={selectedItemId}
        />
      </div>
      <div className="full-info__cell--half-width full-info__cell--half-width--right">
        <WhaleMap
          spices={spice}
          onSelectedItem={onSelectedItem}
          selectedItem={selectedItemId}
        />
      </div>
      <div className="full-info__cell--last-row">
        <SummaryInfo id={selectedItemId} />
      </div>
    </div>
  );
};
