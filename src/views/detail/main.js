import React from "react";
import { withRouter } from "react-router-dom";
import DetailAsync from "./detail-async";
import Note from "../../components/note";
import WithDetailRedux from "../../components/with-detail-redux";
import {
  whaleDetailSelector,
  whaleDetailToErrorSelector,
  whaleDetailToDetailSelector
} from "../../store/selectors/whale-detail";
import { connect } from "react-redux";

import "./main.css";

export const DetailConnected = withRouter(props => {
  const id = props.match.params.id;

  if (!id) {
    return <Note type={Note.TYPE.INFO} description="No whale selected" />;
  }
  return (
    <WithDetailRedux id={id}>
      <DetailAsync {...props} />
    </WithDetailRedux>
  );
});

const mapStateToProps = state => {
  const whaleDetail = whaleDetailSelector(state);
  return {
    item: whaleDetailToDetailSelector(state),
    error: whaleDetailToErrorSelector(state),
    isFetching: whaleDetail.loading
  };
};

export const Detail = connect(mapStateToProps)(DetailConnected);
