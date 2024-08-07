import { userActions } from "../reducers/userReducer";

export const changeCount = (type) => (dispatch, getState) => {
  const { count } = getState();
  if (type === "INCREASE") {
    dispatch(userActions.countChange(count.number + 1));
  } else {
    dispatch(userActions.countChange(count.number - 1));
  }
};
