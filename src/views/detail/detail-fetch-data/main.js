import React from "react";
import Note from "../../../components/note";
import WithDetail from "../../../components/with-detail";

export const DetailFetchData = ({ history, match }) => {
  const id = match.params.id;
  return (
    <WithDetail id={id}>
      {(item, error) => {
        if (error) {
          return (
            <Note type={Note.TYPE.DANGER} title="Error" description={error} />
          );
        }

        if (!item) {
          return (
            <Note type={Note.TYPE.INFO} description="No whale detail info" />
          );
        }

        const onClick = () => {
          history.goBack();
        };

        return (
          <div className="detail">
            <pre>{JSON.stringify(item, null, 2)}</pre>
            <button onClick={onClick}>Go Back</button>
          </div>
        );
      }}
    </WithDetail>
  );
};
