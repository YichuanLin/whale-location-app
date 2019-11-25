import React from "react";
import WithList from "../../components/with-list";
import Loader from "../../components/loader";
import Note from "../../components/note";
import MapWithInitialPosition from "./map-with-initial-position";

import "./main.css";

const ERROR_TITLE = "Error";
const EMPTY_RESULT_TEXT = "Empty results";

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
            <Note
              type={Note.TYPE.DANGER}
              title={ERROR_TITLE}
              description={error}
            />
          );
        }

        if (!list) {
          return null;
        }

        return (
          <>
            {!list.length && (
              <Note type={Note.TYPE.INFO} description={EMPTY_RESULT_TEXT} />
            )}
            <MapWithInitialPosition
              list={list}
              selectedItem={selectedItem}
              onSelectedItem={onSelectedItem}
            />
          </>
        );
      }}
    </WithList>
  );
};
