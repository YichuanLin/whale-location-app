import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import MarkerComponent from "../../components/marker";

const DEFAULT_POSITION = [40.4165, -3.70256];
const DEFAULT_ZOOM = 9;

export const createIcon = color =>
  L.divIcon({
    html: ReactDOMServer.renderToString(<MarkerComponent color={color} />),
    className: "map-marker",
    iconSize: [24, 34]
  });

export const MapSelectable = ({
  mapPosition = DEFAULT_POSITION,
  list,
  selectedItem,
  onSelectedItem
}) => {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  const DEFAULT_ICON = createIcon(MarkerComponent.COLORS.BLACK);

  const SELECTED_ICON = createIcon(MarkerComponent.COLORS.GREEN);

  const listOfMarkers = list.map((item, index) => {
    const position = [item.latitude, item.longitude];
    const onChange = selectedItem => {
      onSelectedItem(selectedItem.id);
    };
    const icon = selectedItem === item.id ? SELECTED_ICON : DEFAULT_ICON;
    return (
      <Marker
        key={index}
        position={position}
        icon={icon}
        onClick={() => onChange(item)}
      ></Marker>
    );
  });

  return (
    <Map
      center={mapPosition}
      zoom={zoom}
      className="map-info"
      onZoomend={e => {
        if (e.target && e.target.getZoom) {
          setZoom(e.target.getZoom());
        }
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {listOfMarkers}
    </Map>
  );
};
