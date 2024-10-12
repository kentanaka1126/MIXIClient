import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_UPDATE,
  USER_GET,
} from "./types";
import { SERVER_URL } from "../utils/constants";

export const update = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${SERVER_URL}/user/update`, user, config)
    .then((res) => dispatch({ type: USER_UPDATE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getUsers = (index, nRows) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/user/get`, {index:index,limit:nRows})
    .then((res) => dispatch({ type: USER_GET, payload: {...res.data,index} }))
    .catch((err) => console.log(err));
};
