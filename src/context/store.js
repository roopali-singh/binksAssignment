import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./reducers/adminReducer";
import { userListReducer, userDetailsReducer } from "./reducers/userReducer";

const initialState = {
  userListReducer: {
    loading: false,
    userList: localStorage.getItem("binksUserList")
      ? JSON.parse(localStorage.getItem("binksUserList"))
      : [],
    error: false,
  },
  userDetailsReducer: {
    loading: false,
    userDetails: {},
    error: false,
  },
  adminReducer: {
    loading: false,
    admin: localStorage.getItem("binksAdmin")
      ? localStorage.getItem("binksAdmin")
      : false,
    error: false,
  },
};

// const reducer = (state, action) => {
//   return {};
// };

const reducer = combineReducers({
  userListReducer: userListReducer,
  userDetailsReducer: userDetailsReducer,
  adminReducer: adminReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
