import { useEffect } from "react";
import { connect } from "react-redux";
import { ACTIONS_CREATOR } from "../../store/actions";

const {
  whaleDetailFetchDataStart,
  whaleDetailFetchDataSuccess,
  whaleDetailFetchDataFail
} = ACTIONS_CREATOR;

const BASE_URL = "http://hotline.whalemuseum.org/api";

export const WithDetailReduxFetchData = ({
  children,
  id,
  onFetchDataStart,
  onFetchDataSuccess,
  onFetchDataFail
}) => {
  const url = `${BASE_URL}/${id}.json`;

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
  onFetchDataStart: () => dispatch(whaleDetailFetchDataStart()),
  onFetchDataSuccess: data => dispatch(whaleDetailFetchDataSuccess(data)),
  onFetchDataFail: error => dispatch(whaleDetailFetchDataFail(error))
});

export const WithDetailRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithDetailReduxFetchData);
