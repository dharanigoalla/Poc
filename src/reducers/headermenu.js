import {REDUX_ACTION_TYPE} from "../constants";

export default function headermenu(state = { headermenu: {} }, action) {
  switch (action.type) {
    case REDUX_ACTION_TYPE.OPEN_LOGIN_DIALOG: {
      return {
        ...state,
      openLoginDialog: action.openLogin,
      }
    }
    default:
      return state;
  }
}
