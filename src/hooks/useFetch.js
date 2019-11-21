import { useEffect, useReducer, useState } from "react";
import dataReducer, {
  fetchStarted,
  errorOccurred,
  dataUpdate
} from "../reducers/data";

export const useFetch = ({ url, config }) => {
  const [fetchUrl, setFetchUrl] = useState(url || null);
  const [fetchConfig, setFetchConfig] = useState(config || null);
  const [state, dispatch] = useReducer(dataReducer, {
    loading: false,
    data: null,
    error: null
  });
  useEffect(() => {
    dispatch(fetchStarted());
    const handleErrors = error => {
      dispatch(errorOccurred(JSON.stringify(error)));
    };

    fetch(url, config)
      .then(response => {
        const { ok } = response;
        response.json().then(responseJSON => {
          if (!ok) {
            handleErrors(responseJSON);
          } else {
            dispatch(dataUpdate(responseJSON));
          }
        });
      })
      .catch(handleErrors);
  }, [fetchUrl, fetchConfig]);

  return [
    {
      ...state
    },
    {
      setUrl: setFetchUrl,
      setConfig: setFetchConfig
    }
  ];
};
