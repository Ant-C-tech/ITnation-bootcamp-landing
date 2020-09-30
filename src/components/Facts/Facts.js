import React from "react";
import Slide from "./Slide";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/effect-cube/effect-cube.scss";

import "./Facts.scss";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
]);

const Facts = ({ title, slides }) => {
  const slidesCollection = slides.map((elem) => (
    <SwiperSlide key={elem.id}>
      <Slide item={elem} />
    </SwiperSlide>
  ));

  return (
    <section className="facts" id="generalFacts">
      <div className="container facts__container">
        <h2 className="facts__title">{title}</h2>
        {
          <Swiper
          
            navigation={{
              prevEl: ".swiper-button-next-unique",
              nextEl: ".swiper-button-prev-unique",
            }}
            
            pagination={{ clickable: true, el: ".swiper-pagination-unique" }}
            coverflowEffect={{
              rotate: 30,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,

              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,

              },
              925: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
              },
            }}
          >
            {slidesCollection}
          </Swiper>
        }
        <div className="swiper-button-next swiper-button-prev-unique"></div>
        <div className="swiper-button-prev swiper-button-next-unique"></div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-unique"></div>
      </div>
    </section>
  );
};

export default Facts;
