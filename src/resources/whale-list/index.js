const BASE_URL = "http://hotline.whalemuseum.org/api.json";

export const whaleList = {
  getUrl: specie => (specie ? `${BASE_URL}?species=${specie}` : BASE_URL)
};
