export const parseError = error => {
  if (error && error.response) {
    return JSON.stringify(error.response.data);
  }
  return null;
};
