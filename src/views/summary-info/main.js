import React from "react";
import { withRouter } from "react-router-dom";
import WithSuspense from "../../components/with-suspense";
import ErrorBoundary from "../../components/error-boundary";
import SummaryInfoFetchData from "./summary-info-fetch-data";

export const SummaryInfo = withRouter(props => (
  <WithSuspense>
    <ErrorBoundary>
      <SummaryInfoFetchData {...props} />
    </ErrorBoundary>
  </WithSuspense>
));
