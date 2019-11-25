import React from "react";
import MapSelectable from "../../../components/map-selectable";
import { useMapPosition } from "../hooks/useMapPosition";

export const MapWithInitialPosition = ({
  list,
  selectedItem,
  onSelectedItem
}) => {
  const mapPosition = useMapPosition(list, selectedItem);

  return (
    <MapSelectable
      list={list}
      selectedItem={selectedItem}
      onSelectedItem={onSelectedItem}
      mapPosition={mapPosition}
    />
  );
};
