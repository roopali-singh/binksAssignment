import adminUser from "../../data/adminUser";
import bcrypt from "bcryptjs";
import {
  ADMIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_REQUEST,
  ADMIN_SUCCESS,
} from "../constants/adminConstants";

export const verifyAdmin = (username, password) => (dispatch) => {
  dispatch({
    type: ADMIN_REQUEST,
  });

  if (
    username === adminUser?.username &&
    bcrypt.compareSync(password, adminUser?.password)
  ) {
    dispatch({
      type: ADMIN_SUCCESS,
      payload: true,
    });

    localStorage.setItem("binksAdmin", true);
  } else {
    dispatch({
      type: ADMIN_FAIL,
      payload: "Incorrect Username or Password",
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: ADMIN_LOGOUT,
  });

  localStorage.removeItem("binksAdmin");
};
