import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_USER_UPDATE,
} from "./types";
import { SERVER_URL } from "../utils/constants";
import setAuthToken from "../utils/setAuthToken";
import { toast } from "react-toastify";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (email, password, navigate) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = axios
      .post(`${SERVER_URL}/register`, body, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
          navigate("/home");
        } else {
          const errors = res.data.errors;
          if (errors.email != "" && errors.email != null)
            toast.error(errors.email);
          if (errors.password != "" && errors.password != null)
            toast.error(errors.password);
        }
      });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors.email != "" && errors.email != null) toast.error(errors.email);
    if (errors.password != "" && errors.password != null)
      toast.error(errors.password);
  }
};

//Login User
export const login = (email, password, navigate) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios
      .post(`${SERVER_URL}/login`, body, config)
      .then((res) => {
        if (res.status == 202) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
          navigate("/admin");
        } else if (res.status === 200) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
          navigate("/sites");
        } else {
          toast.error(res.data.errors);
        }
      });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors.email != "" && errors.email != null) toast.error(errors.email);
    if (errors.password != "" && errors.password != null)
      toast.error(errors.password);
  }
};

export const googleLogin = (tokenResponse, navigate) => async (dispatch) => {
  console.log(tokenResponse);
  try {
    // Get user profile using tokenResponse.access_token
    const res = await axios.post("http://localhost:5000/getUser", {
      token: tokenResponse,
    });

    if (res.status == 202) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      navigate("/admin");
    } else if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      navigate("/home");
    } else {
      toast.error(res.data.errors);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
//Logout and Clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const update = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${SERVER_URL}/user/update`, user, config)
    .then((res) => dispatch({ type: AUTH_USER_UPDATE, payload: res.data }))
    .catch((err) => console.log(err));
};
