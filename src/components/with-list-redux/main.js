import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { ACTIONS_CREATOR } from "../../store/actions";

const { getWhaleList } = ACTIONS_CREATOR;

export const WithListReduxFetchData = ({ children, specie, getWhaleList }) => {
  const getWhaleListData = useCallback(specie => getWhaleList(specie), [
    getWhaleList
  ]);
  useEffect(() => {
    getWhaleListData(specie);
  }, [getWhaleListData, specie]);

  return children;
};

const mapDispatchToProps = dispatch => ({
  getWhaleList: specie => dispatch(getWhaleList(specie))
});

export const WithListRedux = connect(
  null,
  mapDispatchToProps
)(WithListReduxFetchData);
