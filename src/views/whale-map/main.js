import React from "react";
import { connect } from "react-redux";
import Loader from "../../components/loader";
import Note from "../../components/note";
import MapWithInitialPosition from "./map-with-initial-position";
import { ACTIONS_CREATOR } from "../../store/actions";
import {
  whaleDetailSelector,
  whaleListSelector,
  whaleListToMapSelector
} from "../../store/selectors";

import "./main.css";

const ERROR_TITLE = "Error";
const EMPTY_RESULT_TEXT = "Empty results";

export const WhaleMapConnected = ({
  list,
  isFetching,
  error,
  selectedItem,
  onSelectedItem
}) => {
  if (isFetching) {
    return (
      <div className="map-info__loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <Note type={Note.TYPE.DANGER} title={ERROR_TITLE} description={error} />
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
};

const mapStateToProps = state => {
  const whaleDetail = whaleDetailSelector(state);
  const whaleList = whaleListSelector(state);
  return {
    isFetching: whaleList.loading,
    error: whaleList.error,
    list: whaleListToMapSelector(state),
    selectedItem: whaleDetail.id
  };
};

const mapDispatchToProps = dispatch => ({
  onSelectedItem: id => dispatch(ACTIONS_CREATOR.whaleDetailWhaleSelected(id))
});

export const WhaleMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(WhaleMapConnected);
