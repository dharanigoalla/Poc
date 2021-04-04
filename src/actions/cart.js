import {REDUX_ACTION_TYPE} from "../constants";


export const addItem = (item) => ({
  type: REDUX_ACTION_TYPE.ADD_ITEM_TO_CART,
  item,
});

export const deleteItem = (id) => ({
  type: REDUX_ACTION_TYPE.DELETE_ITEM_FROM_CART,
  itemId: id,
});

export const changeProductQty = (id, qty) => ({
  type: REDUX_ACTION_TYPE.UPDATE_PRODUCT_QUANTITY,
  itemId: id,
  qty: qty,
});

export const openLogin = (open) => ({
  type: REDUX_ACTION_TYPE.OPEN_LOGIN_DIALOG,
  openLogin: open,
});

export const setUser = (user) => ({
  type: REDUX_ACTION_TYPE.SET_USER,
  user,
});

export const resetCart = (user) => ({
  type: REDUX_ACTION_TYPE.RESET_CART,
});
