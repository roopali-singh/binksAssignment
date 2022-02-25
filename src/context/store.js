import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
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
};

// const reducer = (state, action) => {
//   return {};
// };

const reducer = combineReducers({
  userListReducer: userListReducer,
  userDetailsReducer: userDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
