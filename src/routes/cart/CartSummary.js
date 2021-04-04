import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Paper, Button} from '@material-ui/core';
import s from './CartSummary.css';
import useStyles from "isomorphic-style-loader/useStyles";
import {openLogin, resetCart} from "../../actions/cart";

function CartSummary(props) {
  useStyles(s);
  const {cart: {items}, user} = useSelector(state => ({
    cart: state.cart,
    user: state.user,
  }));

  const dispatch = useDispatch();

  const checkOut = () => {
    if(!user) {
      dispatch(openLogin(true));
    }
    else {
      dispatch(resetCart());
    }
  }
  const renderSummary = () => {
    const summary = Object.values(items).reduce(
      (acc, item) => {
       return  {
          totalPrice: acc.totalPrice + (item.d_price * (item.qty || 1)),
          totalQty: acc.totalQty + (item.qty || 1),
        }
      },
      { totalPrice: 0, totalQty: 0 },
    );

    return (
      <div>
        <div>
        Subtotal({summary.totalQty} items) : Rs&nbsp;{summary.totalPrice}
        </div>

        <Button
          size="medium"
          color="secondary"
          variant="contained"
          className={s.checkoutBtn}
          disabled={!summary.totalPrice}
          onClick={() => checkOut()}
        >
          Proceed to Buy
        </Button>
    </div>
    )
  }
  return (
    <Paper variant="outlined" component={"div"} className={s.container}>
      {renderSummary()}
    </Paper>
  );
}

export default CartSummary;
