

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Home.css';
import Hero from "./Hero";
import HomeProductSection from "./HomeProductSection";


const TRENDING_ITEMS = [
  {
    id: 10000,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1725008%2F7f36830f23a7fa961ade6e6038c9fda5%2Fp1725008.jpg%26format%3Dauto&w=640&q=75',
    desc: 'Men\'s Fitness Workout Bottoms - Black',
    price: 800,
    d_price: 700,
    d_off: 10,
  },
  {
    id: 10001,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1851221%2F7d9af56ed7e444f7e5bf44093155d10b%2Fp1851221.jpg%26format%3Dauto%26format%3Dauto&w=640&q=75',
    desc: 'Men\'s Fitness Workout Bottoms - Black',
    price: 1000,
    d_price: 700,
    d_off: 30,
  },
  {
    id: 10002,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1725008%2F7f36830f23a7fa961ade6e6038c9fda5%2Fp1725008.jpg%26format%3Dauto&w=640&q=75',
    desc: "Men's Eco-Friendly Fitness Training Shorts - Plain Khaki",
    price: 1400,
    d_price: 700,
    d_off: 50,
  },
  {
    id: 10003,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1709851%2F04c01420b81518df6a0d0b0dcadc9a3f%2Fp1709851.jpg%26format%3Dauto%26format%3Dauto&w=640&q=75',
    desc: 'Regular skipping rope',
    price: 600,
    d_price: 480,
    d_off: 20,
  },
  {
    id: 10004,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1804193%2F2fa3d24ae98eb63159bf4f60d1b03a3c%2Fp1804193.jpg%26format%3Dauto%26format%3Dauto&w=640&q=75',
    desc: 'Water proof trekking boots',
    price: 7000,
    d_price: 5600,
    d_off: 20,
  },
  {
    id: 10005,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1786958%2F2b0a8a97ea3b1154f2f3734009451fe2%2Fp1786958.jpg%26format%3Dauto%26format%3Dauto&w=640&q=75',
    desc: "Men's travel trousers",
    price: 800,
    d_price: 700,
    d_off: 10,
  },
];

export default function Home({ news }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Hero />
        <HomeProductSection title={"Trending Near you"} products={TRENDING_ITEMS}/>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};
