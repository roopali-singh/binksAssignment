import Axios from "axios";
import {
  FETCH_USER_API_BASE_URL,
  THINGS_TO_INCLUDE,
  USERS_PER_PAGE,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_SEED,
} from "../constants/userConstants";

export const fetchUserList = (page) => async (dispatch, getState) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });

  try {
    const { data } = await Axios.get(
      `${FETCH_USER_API_BASE_URL}?&page=${page}&results=${USERS_PER_PAGE}&seed=${USER_SEED}&inc=${THINGS_TO_INCLUDE}`
    );

    dispatch({ type: USER_LIST_SUCCESS, payload: data?.results });

    localStorage.setItem(
      "binksUserList",
      JSON.stringify(getState().userListReducer.userList)
    );
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const findUserWithUsername = (userList, username) => {
  return userList?.find((user) => user?.login?.username === username);
};

export const fetchUserDetails = (username) => async (dispatch, getState) => {
  dispatch({
    type: USER_DETAILS_REQUEST,
  });

  const userList = await getState().userListReducer.userList;

  const userDetails = await findUserWithUsername(userList, username);

  if (userDetails) {
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: userDetails,
    });
  } else {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: "User Not Found",
    });
  }
};
