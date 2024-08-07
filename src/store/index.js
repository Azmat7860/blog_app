import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const userInfoFromLocalStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const initialState = {
  user: { userInfo: userInfoFromLocalStorage },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;
