
import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

export default function Header() {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation />
        <Link className={s.brand} to="/">
          <img
            src={
              'https://cdncontent.decathlon.in/_next/static/images/logo-93d12d8cff484ab736d2a39f15bf66d8.svg'
            }
            alt="Decathlon logo"
          />
        </Link>
      </div>
    </div>
  );
}
