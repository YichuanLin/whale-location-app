import React from "react";
import Note from "../../../components/note";
import Loader from "../../../components/loader";

export const DetailAsync = ({ history, error, item, isFetching }) => {
  if (isFetching) {
    return (
      <div className="detail-async__loader-wrapper">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <Note type={Note.TYPE.DANGER} title="Error" description={error} />;
  }

  if (!item) {
    return <Note type={Note.TYPE.INFO} description="No whale detail info" />;
  }

  const onClick = () => {
    history.goBack();
  };

  return (
    <div className="detail-async">
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <button onClick={onClick}>Go Back</button>
    </div>
  );
};
