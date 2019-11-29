import { useEffect, useReducer, useState } from "react";
import dataReducer, {
  fetchStarted,
  errorOccurred,
  dataUpdate
} from "../store/reducers/data";

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

export const useFetch = ({ url, config }) => {
  const [fetchUrl, setFetchUrl] = useState(url || null);
  const [fetchConfig, setFetchConfig] = useState(config || null);
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch(fetchStarted());
    const handleErrors = error => {
      dispatch(errorOccurred(JSON.stringify(error)));
    };

    (async function() {
      try {
        const response = await fetch(fetchUrl, fetchConfig);
        const { ok } = response;
        response.json().then(responseJSON => {
          if (!ok) {
            handleErrors(responseJSON);
          } else {
            dispatch(dataUpdate(responseJSON));
          }
        });
      } catch (error) {
        handleErrors(error);
      }
    })();
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
