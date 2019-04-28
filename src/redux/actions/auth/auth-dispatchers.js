import axios from "axios";
import * as actions from "./auth-actions";

const baseUrl = "http://localhost:8800/api/v1/auth";

export const loginUser = data => async dispatch => {
  dispatch(actions.loginStart());
  try {
    const res = await axios.post(`${baseUrl}/login`, data);

    dispatch(
      actions.loginSuccess({ ...res.data.user, message: "Login success" })
    );
  } catch (errors) {
    dispatch(actions.loginFailure(errors));
  }
};

export const registerUser = data => async dispatch => {
  dispatch(actions.registerStart());
  try {
    const res = await axios.post(`${baseUrl}/signup`, data);
    const { token } = res.data.data[0];
    localStorage.setItem("token", token);
    dispatch(
      actions.registerSuccess({ ...res.data, message: "Signup success" })
    );
  } catch (errors) {
    dispatch(actions.registerFailure(errors));
  }
};
