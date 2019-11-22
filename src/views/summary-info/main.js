import React, { useEffect } from "react";
import Loader from "../../components/loader";
import Card from "../../components/card";
import Note from "../../components/note";
import { withRouter } from "react-router-dom";
import { useFetch } from "../../hooks";
import { SummaryInfoWrapper } from "./wrapper";

const BASE_URL = "http://hotline.whalemuseum.org/api";

const getInitialFetchData = id => {
  const url = `${BASE_URL}/${id}.json`;
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return {
    url,
    config
  };
};

const SummaryInfoView = ({ id, history }) => {
  const [{ data: item, error, loading }, { setUrl }] = useFetch(
    getInitialFetchData(id)
  );

  const url = `${BASE_URL}/${id}.json`;

  useEffect(() => {
    setUrl(url);
  }, [url, setUrl]);

  if (loading) {
    return (
      <div className="whale-list__loader-wrapper">
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
};

export const SummaryInfo = withRouter(props => (
  <SummaryInfoWrapper {...props} Component={SummaryInfoView} />
));
