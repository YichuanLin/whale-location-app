import useSWR from "swr";

const BASE_URL = "http://hotline.whalemuseum.org/api";

const fetcher = id => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(`${BASE_URL}/${id}.json`, config).then(response =>
    response.json()
  );
};

export const WithDetail = ({ id, children }) => {
  const url = `${BASE_URL}/${id}.json`;

  const { data: detail, error } = useSWR(id ? url : null, () => fetcher(id), {
    suspense: true
  });

  return children(detail, error);
};
