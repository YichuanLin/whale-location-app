import { useState, useEffect } from "react";

export const WithList = ({ spices, children }) => {
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
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
    const baseUrl = "http://hotline.whalemuseum.org/api.json";
    const url = spices ? `${baseUrl}?species=${spices}` : baseUrl;
    fetch(url, config)
      .then(response => {
        const { ok } = response;
        response.json().then(responseJSON => {
          if (!ok) {
            handleErrors(responseJSON);
          } else {
            setList(responseJSON);
            setIsFetching(false);
          }
        });
      })
      .catch(handleErrors);
  }, [spices]);

  return children(list, isFetching, error);
};
