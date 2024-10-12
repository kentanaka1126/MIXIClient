import axios from "axios";
import { SERVER_URL } from "../utils/constants";
import { update } from "./auth";

export const handleToken = (totalAmount, token, user) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/stripe/pay`, {
      token: token.id,
      amount: Number(totalAmount),
    })
    .then((res) => {
      dispatch(update({ ...user, subscription: totalAmount }));
    })
    .catch((err) => console.log(err));
};
