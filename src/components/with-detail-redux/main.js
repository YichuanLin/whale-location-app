import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { ACTIONS_CREATOR } from "../../store/actions";

const { getWhaleDetail } = ACTIONS_CREATOR;

export const WithDetailReduxFetchData = ({ children, id, getWhaleDetail }) => {
  const getWhaleDetailData = useCallback(id => getWhaleDetail(id), [
    getWhaleDetail
  ]);
  useEffect(() => {
    getWhaleDetailData(id);
  }, [getWhaleDetailData, id]);

  return children;
};

const mapDispatchToProps = dispatch => ({
  getWhaleDetail: id => dispatch(getWhaleDetail(id))
});

export const WithDetailRedux = connect(
  null,
  mapDispatchToProps
)(WithDetailReduxFetchData);
