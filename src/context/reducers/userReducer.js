import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from "../constants/userConstants";

export const userReducer = (
  state = { loading: false, userData: [], error: false },
  action
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };

    case USER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
