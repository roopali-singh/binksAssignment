import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";

const initialState = { user: {} };

// const reducer = (state, action) => {
//   return {};
// };

const reducer = combineReducers({
  user: userReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
