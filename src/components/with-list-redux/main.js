import { useEffect } from "react";
import { connect } from "react-redux";
import { ACTIONS_CREATOR } from "../../store/actions";

const {
  whaleListFetchDataStart,
  whaleListFetchDataSuccess,
  whaleListFetchDataFail
} = ACTIONS_CREATOR;

const BASE_URL = "http://hotline.whalemuseum.org/api.json";

export const WithListReduxFetchData = ({
  children,
  specie,
  onFetchDataStart,
  onFetchDataSuccess,
  onFetchDataFail
}) => {
  const url = specie ? `${BASE_URL}?species=${specie}` : BASE_URL;

  useEffect(() => {
    onFetchDataStart();
    const handleErrors = error => {
      onFetchDataFail(JSON.stringify(error));
    };

    (async function() {
      try {
        const response = await fetch(url);
        const { ok } = response;
        response.json().then(responseJSON => {
          if (!ok) {
            handleErrors(responseJSON);
          } else {
            onFetchDataSuccess(responseJSON);
          }
        });
      } catch (error) {
        handleErrors(error);
      }
    })();
  }, [onFetchDataStart, onFetchDataSuccess, onFetchDataFail, url]);

  return children;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onFetchDataStart: () => dispatch(whaleListFetchDataStart()),
  onFetchDataSuccess: data => dispatch(whaleListFetchDataSuccess(data)),
  onFetchDataFail: error => dispatch(whaleListFetchDataFail(error))
});

export const WithListRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithListReduxFetchData);
