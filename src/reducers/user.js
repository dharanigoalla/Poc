import {REDUX_ACTION_TYPE} from "../constants";

export default function user(state = {}, action) {
  switch (action.type) {
    case REDUX_ACTION_TYPE.SET_USER: {
      return {
        ...state,
        ...action.user,
      }
    }
    default:
      return state;
  }
}
