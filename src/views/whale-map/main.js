import React from "react";
import WithList from "../../components/with-list";
import Loader from "../../components/loader";
import Note from "../../components/note";
import MapSelectable from "../../components/map-selectable";

import "./main.css";

const BLACK_WHALE = "../../whale-black.svg";
const GREEN_WHALE = "../../whale-green.svg";

export const WhaleMap = ({ spices, selectedItem, onSelectedItem }) => {
  return (
    <WithList spices={spices}>
      {(list, isFetching, error) => {
        if (isFetching) {
          return (
            <div className="map-info__loader-wrapper">
              <Loader />
            </div>
          );
        }

        if (error) {
          return (
            <Note type={Note.TYPE.DANGER} title="Error" description={error} />
          );
        }

        let mapPosition;
        if (selectedItem) {
          const foundItem = list.find(item => item.id === selectedItem);
          if (foundItem) {
            mapPosition = [foundItem.latitude, foundItem.longitude];
          }
        } else if (list.length) {
          const [firstItem] = list;
          mapPosition = [firstItem.latitude, firstItem.longitude];
        }

        return (
          <>
            {!list.length && (
              <Note type={Note.TYPE.INFO} description="Empty results" />
            )}
            <MapSelectable
              defaulIcon={BLACK_WHALE}
              selectedIcon={GREEN_WHALE}
              list={list}
              selectedItem={selectedItem}
              onSelectedItem={onSelectedItem}
              mapPosition={mapPosition}
            />
          </>
        );
      }}
    </WithList>
  );
};
