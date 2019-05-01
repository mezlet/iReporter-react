import axios from "axios";
import * as actions from "./auth-actions";

const baseUrl = `${process.env.API_BASE_URL}/auth`;

export const loginUser = data => async dispatch => {
  dispatch(actions.loginStart());
  try {
    const res = await axios.post(`${baseUrl}/login`, data);
    const { token, user } = res.data.data[0];
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(actions.loginSuccess({ ...res.data, message: "Login success" }));
  } catch (errors) {
    let errorData = "";
    if (errors.response) {
      const { response } = errors;
      errorData = response.data;
    }
    dispatch(actions.loginFailure(errorData));
  }
};

export const registerUser = data => async dispatch => {
  dispatch(actions.registerStart());
  try {
    const res = await axios.post(`${baseUrl}/signup`, data);
    const { token, user } = res.data.data[0];
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(
      actions.registerSuccess({ ...res.data, message: "Signup success" })
    );
  } catch (errors) {
    let errorData = "";
    if (errors.response) {
      const { response } = errors;
      errorData = response.data;
    }
    dispatch(actions.registerFailure(errorData));
  }
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(actions.logoutAction());
};

export const clearError = () => dispatch => {
  dispatch(actions.clearErrorAction());
};
