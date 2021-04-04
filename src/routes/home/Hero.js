import React from 'react';
import useStyles from "isomorphic-style-loader/useStyles";
import s from './Hero.css';
import n from  "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const ITEMS = [
  {
    id: 1000,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs853979%2Fk%2442d76ebcd75e6b3a8a69081e62d80493%2Fsummer%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=3840&q=75',
    desc: "Summer wear"
  },
  {
    id: 1001,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs853980%2Fk%2474855d9d9d5920b0ca50640b2b758e7c%2Fmain%2520banners%2520galaxy%2520to%2520galaxy%2520main%2520banner%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=3840&q=75',
    desc: "Cricket wear slx"
  },
  {
    id: 1002,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs854092%2Fk%24db16dd1b2c47d6139c4e8f329d170cd0%2Flanding%2520page%2520desk.jpg%3Ff%3D1920x470%26format%3Dauto&w=3840&q=75',
    desc: "Running apparels and accessories"
  },
  {
    id: 1003,
    img_url: 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850786%2Fk%2467d676e372b1ae68bdb939b59e71b541%2Fimgonline%2520com%2520ua%2520compresstosize%2520ko7nq6hefmgb0nc.jpg%3Ff%3D1920x470%26format%3Dauto&w=3840&q=75',
    desc: "Running apparels and accessories"
  },
]
function Hero(props) {
  useStyles(s, n);
  return (
    <div>
      <Carousel
        showThumbs={false}
        showArrows
        showStatus={false}
        showIndicators
        infiniteLoop
        emulateTouch
        useKeyboardArrows
        transitionTime={1000}
        width="100%"
      >
        {ITEMS.map(banner => (
          <div className={s.slideHolder} key={banner.id}>
            <img alt={banner.desc} src={banner.img_url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
