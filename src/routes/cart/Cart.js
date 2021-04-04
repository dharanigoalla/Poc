import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import CartItem from "../../components/CartItem";
import s from './Cart.css'
import useStyles from "isomorphic-style-loader/useStyles";
import CartSummary from "./CartSummary";

function Cart(props) {
  useStyles(s);
  const {cart: {items}} = useSelector(state => ({cart: state.cart}));
const cartItems = Object.values(items);

  return (
    <div className={s.root}>
      <div className={s.cartItemWrapper}>
        {cartItems.length > 0 ?
          cartItems.map( product => <CartItem key={product.id} product={product} className={s.cartItem}/>)
        : <h3> Your shopping cart is empty.</h3>}
      </div>
      <CartSummary/>
    </div>
  )
}

export default Cart;
