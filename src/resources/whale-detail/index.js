const BASE_URL = "http://hotline.whalemuseum.org/api";

export const whaleDetail = {
  getUrl: id => `${BASE_URL}/${id}.json`
};
