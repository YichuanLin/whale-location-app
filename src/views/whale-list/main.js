import React, { useEffect } from "react";
import Loader from "../../components/loader";
import Note from "../../components/note";
import ListGroupSelectable from "../../components/list-group-selectable";
import { useFetch } from "../../hooks";

import "./main.css";

const BASE_URL = "http://hotline.whalemuseum.org/api.json";

const getInitialFetchData = spices => {
  const url = spices ? `${BASE_URL}?species=${spices}` : BASE_URL;
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return {
    url,
    config
  };
};

export const WhaleList = ({ spices, selectedItem, onSelectedItem }) => {
  const [{ data: list, error, loading }, { setUrl }] = useFetch(
    getInitialFetchData(spices)
  );

  useEffect(() => {
    const url = spices ? `${BASE_URL}?species=${spices}` : BASE_URL;
    setUrl(url);
  }, [spices]);

  if (loading) {
    return (
      <div className="whale-list__loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <Note type={Note.TYPE.DANGER} title="Error" description={error} />;
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
};
