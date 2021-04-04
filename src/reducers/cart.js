import {REDUX_ACTION_TYPE} from "../constants";

const initialState = { items: {} };

export default function cart(state = initialState, action) {
  switch (action.type) {
    case REDUX_ACTION_TYPE.ADD_ITEM_TO_CART:
      return {
        ...state,
        items: { ...state.items, [action.item.id]: { ...action.item, qty: 1 } },
      };
    case REDUX_ACTION_TYPE.RESET_CART:
      return {
        ...state,
        items: {},
      };
    case REDUX_ACTION_TYPE.UPDATE_PRODUCT_QUANTITY:
      return {
        ...state,
        items: { ...state.items, [action.itemId]: {...state.items[action.itemId], qty: action.qty} }
      };
    case REDUX_ACTION_TYPE.DELETE_ITEM_FROM_CART:
    const items = state.items;
    delete items[action.itemId];
      return {
        ...state,
        items: state.items,
      };
    default:
      return state;
  }
}
