import React from "react";
import Loader from "../../components/loader";
import Note from "../../components/note";
import ListGroupSelectable from "../../components/list-group-selectable";
import WithList from "../../components/with-list";

import "./main.css";

export const WhaleList = ({ spices, selectedItem, onSelectedItem }) => {
  return (
    <WithList spices={spices}>
      {(list, isFetching, error) => {
        if (isFetching) {
          return (
            <div className="whale-list__loader-wrapper">
              <Loader />
            </div>
          );
        }

        if (error) {
          return (
            <Note type={Note.TYPE.DANGER} title="Error" description={error} />
          );
        }

        if (!list) {
          return null;
        }

        if (!list.length) {
          return <Note type={Note.TYPE.INFO} description="Empty results" />;
        }

        const onChange = ({ id }) => {
          onSelectedItem(id);
        };

        return (
          <div className="whale-list__list-wrapper">
            <ListGroupSelectable
              list={list}
              selectedItem={selectedItem}
              onSelectedItem={onChange}
            />
          </div>
        );
      }}
    </WithList>
  );
};
