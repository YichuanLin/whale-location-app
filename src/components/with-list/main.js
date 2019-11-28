import { useEffect } from "react";
import { useFetch } from "../../hooks";

const BASE_URL = "http://hotline.whalemuseum.org/api.json";

const getInitialFetchData = specie => {
  const url = specie ? `${BASE_URL}?species=${specie}` : BASE_URL;
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

export const WithList = ({ specie, children }) => {
  const [{ data: list, error, loading }, { setUrl }] = useFetch(
    getInitialFetchData(specie)
  );

  useEffect(() => {
    const url = specie ? `${BASE_URL}?species=${specie}` : BASE_URL;
    setUrl(url);
  }, [specie, setUrl]);

  return children(list, loading, error);
};
