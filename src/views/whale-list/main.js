import React from "react";
import { connect } from "react-redux";
import Loader from "../../components/loader";
import Note from "../../components/note";
import ListGroupSelectable from "../../components/list-group-selectable";
import { ACTIONS_CREATOR } from "../../store/actions";
import {
  whaleListSelector,
  whaleDetailSelector,
  whaleListToErrorSelector,
  whaleListToListSelector
} from "../../store/selectors";

import "./main.css";

export const WhaleListConnected = ({
  isFetching,
  error,
  list,
  selectedItem,
  onSelectedItem
}) => {
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

const mapStateToProps = state => {
  const whaleDetail = whaleDetailSelector(state);
  const whaleList = whaleListSelector(state);
  return {
    isFetching: whaleList.loading,
    error: whaleListToErrorSelector(state),
    list: whaleListToListSelector(state),
    selectedItem: whaleDetail.detail && whaleDetail.detail.id
  };
};

const mapDispatchToProps = dispatch => ({
  onSelectedItem: id => dispatch(ACTIONS_CREATOR.getWhaleDetail(id))
});

export const WhaleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(WhaleListConnected);
