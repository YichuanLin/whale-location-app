import { useEffect } from "react";
import { useFetch } from "../../hooks";

const BASE_URL = "http://hotline.whalemuseum.org/api.json";

const getInitialFetchData = spices => {
  const url = spices ? `${BASE_URL}?species=${spices}` : BASE_URL;
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

export const WithList = ({ spices, children }) => {
  const [{ data: list, error, loading }, { setUrl }] = useFetch(
    getInitialFetchData(spices)
  );

  useEffect(() => {
    const url = spices ? `${BASE_URL}?species=${spices}` : BASE_URL;
    setUrl(url);
  }, [spices, setUrl]);

  return children(list, loading, error);
};
