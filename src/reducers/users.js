import { USER_GET, USER_UPDATE } from "../actions/types";

const initialState = {
  user: null,
  total: 0,
  index: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_GET:
      return {
        ...state,
        ...payload,
      };
    case USER_UPDATE:
      return {
        ...state,
        users:state.users.map(item=>item._id==payload._id?{...payload}:item)
      };
    default:
      return state;
  }
}
