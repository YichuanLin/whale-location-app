import React, { Suspense } from "react";
import Loader from "../../components/loader";

export const WithSuspense = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="loader-wrapper">
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
