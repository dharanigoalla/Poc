
import useStyles from 'isomorphic-style-loader/useStyles';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import s from './Login.css';
import {Dialog} from '@material-ui/core';
import {useSelector, useDispatch} from "react-redux";
import {openLogin, setUser} from "../../actions/cart";
import users from "./user";

export default function Login() {
  useStyles(s);
  const {headermenu: {openLoginDialog}} = useSelector(state => ({headermenu: state.headermenu}));
  const [email, setEmail] = useState('');
  const  [pass, setPass] = useState('');
  const [errors, setErrors] = useState('');

  const dispatch = useDispatch();
  const formRef = useRef();
  const onLogin = (e) => {
    e.preventDefault();
   const user =  users.find(u => u.email === email);
   if(user) {
     if (user.password === pass) {
       dispatch(setUser(user))
       dispatch(openLogin());
     } else {
       setErrors('invalid credentials')
     }

   } else {
     setErrors('invalid credentials')
   }

  }
  return (
    <Dialog onClose={() => dispatch(openLogin(false))} aria-labelledby="simple-dialog-title"   open={!!openLoginDialog}>
    <div className={s.root}>
      <div className={s.container}>
        <form ref={formRef} onSubmit={onLogin}>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              email address: dharanigoalla@gmail.com
              <input
                className={s.input}
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                required={true}// eslint-disable-line jsx-a11y/no-autofocus
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              Password: test
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <button className={s.button}  type="submit" value="submit">
              Log in
            </button>
          </div>
          {errors &&
          <div className={s.error}>
            {errors}
          </div>
          }
        </form>
      </div>
    </div>
    </Dialog>
  );
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
};
