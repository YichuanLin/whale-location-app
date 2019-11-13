import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Card from "../../components/card";
import Note from "../../components/note";
import { withRouter } from "react-router-dom";

const SummaryInfo = ({ id, history }) => {
  const [item, setItem] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!id) {
      setItem(null);
      return;
    }
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    setError(null);
    setIsFetching(true);
    const handleErrors = error => {
      setError(JSON.stringify(error));
      setIsFetching(false);
    };
    const baseUrl = `http://hotline.whalemuseum.org/api/${id}.json`;
    fetch(baseUrl, config)
      .then(response => {
        const { ok } = response;
        response.json().then(responseJSON => {
          if (!ok) {
            handleErrors(responseJSON);
          } else {
            setItem(responseJSON);
            setIsFetching(false);
          }
        });
      })
      .catch(handleErrors);
  }, [id]);

  if (isFetching) {
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

export const SummaryInfoWrapper = withRouter(SummaryInfo);
