import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WhaleSummaryFetchData from "./whale-summary-fetch-data";
import Note from "../../components/note";
import WithDetailRedux from "../../components/with-detail-redux";
import {
  whaleDetailSelector,
  whaleDetailToSummarySelector
} from "../../store/selectors";

export const WhaleSummaryFetchDataConnected = withRouter(props => {
  const { id } = props;
  if (!id) {
    return <Note type={Note.TYPE.INFO} description="No whale selected" />;
  }
  return (
    <WithDetailRedux id={id}>
      <WhaleSummaryFetchData {...props} />
    </WithDetailRedux>
  );
});

const mapStateToProps = state => {
  const whaleDetail = whaleDetailSelector(state);
  return {
    id: whaleDetail.id,
    item: whaleDetailToSummarySelector(state),
    error: whaleDetail.error,
    isFetching: whaleDetail.loading
  };
};

export const WhaleSummary = connect(mapStateToProps)(
  WhaleSummaryFetchDataConnected
);
