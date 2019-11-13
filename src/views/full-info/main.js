import React, { useState } from "react";
import WhaleList from "../../views/whale-list";
import Dropdown from "../../components/dropdown";
import SummaryInfo from "../summary-info";

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
    <div className="full-info">
      <div className="full-info__spice-field">
        <label>Spiece: </label>
        <Dropdown
          id="full-info__dropdown"
          options={OPTIONS_SPECIES}
          onChange={onChangeSpice}
        />
      </div>
      <WhaleList
        spices={spice}
        onSelectedItem={onSelectedItem}
        selectedItem={selectedItemId}
      />
      <SummaryInfo id={selectedItemId} />
    </div>
  );
};
