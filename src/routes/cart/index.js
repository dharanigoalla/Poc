import React from 'react';
import Layout from '../../components/Layout';
import Cart from './Cart';

function action() {
  return {
    chunks: ['cart'],
    title: 'cart items',
    component: (
      <Layout>
        <Cart />
      </Layout>
    ),
  };
}

export default action;
