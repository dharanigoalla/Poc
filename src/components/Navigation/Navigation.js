
import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import cx from 'classnames';
import s from './Navigation.css';
import {IconButton, Badge} from "@material-ui/core";
import AddShoppingCartOutlined from '@material-ui/icons/AddShoppingCartOutlined';
import {AccountCircleOutlined} from '@material-ui/icons'
import Link from '../Link';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, openLogin} from "../../actions/cart";

export default function Navigation() {
  const {cart : { items }, user} = useSelector( state => ({
    cart: state.cart,
    user: state.user,
  }));
  const cartItemsCount = Object.keys(items) && Object.keys(items).length;
  const dispatch = useDispatch();
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.link} to="#">
        {!user ? <IconButton aria-label="user profile" color="inherit" onClick={() => dispatch(openLogin(true))}>
          <AccountCircleOutlined/>
        </IconButton>
          :
          <div>
          <IconButton aria-label="user profile" color="inherit" onClick={() => dispatch(openLogin(true))}/>
            {user.name}
          </div>

        }
      </div>
      <Link className={s.link} to="/cart">
        <IconButton aria-label="show number of items in cart" color="inherit">
          <Badge badgeContent={cartItemsCount} color="secondary" invisible={!cartItemsCount}>
            <AddShoppingCartOutlined />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
}
