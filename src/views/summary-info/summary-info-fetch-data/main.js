import React from "react";
import Note from "../../../components/note";
import Card from "../../../components/card";
import WithDetail from "../../../components/with-detail";

export const SummaryInfoFetchData = ({ id, history }) => {
  return (
    <WithDetail id={id}>
      {(item, error) => {
        if (error) {
          return (
            <Note type={Note.TYPE.DANGER} title="Error" description={error} />
          );
        }

        if (!item) {
          return <Note type={Note.TYPE.INFO} description="No whale selected" />;
        }

        const button = {
          text: "More info",
          onClick: () => {
            history.push(`/detail/${id}`);
          }
        };

        return (
          <Card
            title={item.species}
            subtitle={item.quantity || 0}
            content={item.location}
            button={button}
          />
        );
      }}
    </WithDetail>
  );
};
