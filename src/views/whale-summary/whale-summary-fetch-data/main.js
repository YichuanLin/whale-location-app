import React from "react";
import Note from "../../../components/note";
import Card from "../../../components/card";
import Loader from "../../../components/loader";

export const WhaleSummaryFetchData = ({ item, error, isFetching, history }) => {
  if (isFetching) {
    return (
      <div className="whale-summary__loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <Note type={Note.TYPE.DANGER} title="Error" description={error} />;
  }

  if (!item) {
    return <Note type={Note.TYPE.INFO} description="No whale selected" />;
  }
  const button = {
    text: "More info",
    onClick: () => {
      history.push(`/detail/${item.id}`);
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
};
