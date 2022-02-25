import {
  ADMIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_REQUEST,
  ADMIN_SUCCESS,
} from "../constants/adminConstants";

export const adminReducer = (
  state = { loading: false, admin: false, error: false },
  action
) => {
  switch (action.type) {
    case ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        admin: action.payload,
      };

    case ADMIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADMIN_LOGOUT:
      return {
        admin: false,
      };

    default:
      return state;
  }
};
