import React from "react";
import { withRouter } from "react-router-dom";
import DetailFetchData from "./detail-fetch-data";
import WithSuspense from "../../components/with-suspense";
import ErrorBoundary from "../../components/error-boundary";

import "./main.css";

export const Detail = withRouter(props => (
  <WithSuspense>
    <ErrorBoundary>
      <DetailFetchData {...props} />
    </ErrorBoundary>
  </WithSuspense>
));
