import { useEffect, useContext } from "react";
import { WhaleListContext } from "../../store";
import { ACTIONS } from "../../reducers/whales";

const BASE_URL = "http://hotline.whalemuseum.org/api.json";

export const WithList = ({ spices, children }) => {
  const [state, dispatch] = useContext(WhaleListContext);
  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    dispatch({ type: ACTIONS.LOADING_STARTED });
    const handleErrors = error => {
      dispatch({
        type: ACTIONS.ERROR_OCCURRED,
        payload: JSON.stringify(error)
      });
    };

    const url = spices ? `${BASE_URL}?species=${spices}` : BASE_URL;
    fetch(url, config)
      .then(response => {
        const { ok } = response;
        response.json().then(responseJSON => {
          if (!ok) {
            handleErrors(responseJSON);
          } else {
            dispatch({ type: ACTIONS.LIST_UPDATED, payload: responseJSON });
          }
        });
      })
      .catch(handleErrors);
  }, [spices]);

  return children(state.list, state.isFetching, state.error);
};
