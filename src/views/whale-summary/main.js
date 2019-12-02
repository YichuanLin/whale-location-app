import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WhaleSummaryAsync from "./whale-summary-async";
import Note from "../../components/note";
import WithDetailRedux from "../../components/with-detail-redux";
import {
  whaleDetailSelector,
  whaleDetailToErrorSelector,
  whaleDetailToSummarySelector
} from "../../store/selectors";

export const WhaleSummaryFetchDataConnected = withRouter(props => {
  const { item } = props;
  if (!item) {
    return <Note type={Note.TYPE.INFO} description="No whale selected" />;
  }
  return (
    <WithDetailRedux id={item.id}>
      <WhaleSummaryAsync {...props} />
    </WithDetailRedux>
  );
});

const mapStateToProps = state => {
  const whaleDetail = whaleDetailSelector(state);
  return {
    item: whaleDetailToSummarySelector(state),
    error: whaleDetailToErrorSelector(state),
    isFetching: whaleDetail.loading
  };
};

export const WhaleSummary = connect(mapStateToProps)(
  WhaleSummaryFetchDataConnected
);
