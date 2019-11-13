import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Note from "../../components/note";

import "./main.css";
import { ListGroupSelectable } from "../../components/list-group-selectable/main";

export const WhaleList = ({ spices, selectedItem, onSelectedItem }) => {
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    setError(null);
    setIsFetching(true);
    const handleErrors = error => {
      setError(JSON.stringify(error));
      setIsFetching(false);
    };
    const baseUrl = "http://hotline.whalemuseum.org/api.json";
    const url = spices ? `${baseUrl}?species=${spices}` : baseUrl;
    fetch(url, config)
      .then(response => {
        const { ok } = response;
        response.json().then(responseJSON => {
          if (!ok) {
            handleErrors(responseJSON);
          } else {
            setList(responseJSON);
            setIsFetching(false);
          }
        });
      })
      .catch(handleErrors);
  }, [spices]);

  if (isFetching) {
    return (
      <div className="whale-list__loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <Note type={Note.TYPE.DANGER} title="Error" description={error} />;
  }

  if (!list.length) {
    return <Note type={Note.TYPE.INFO} description="Empty results" />;
  }

  const onChange = selectedItem => {
    onSelectedItem(selectedItem.id);
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
};
