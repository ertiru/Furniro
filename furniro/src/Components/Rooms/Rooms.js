import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import room1 from "../../assets/room1.png";
import room2 from "../../assets/room2.png";
import room3 from "../../assets/room3.png";
import line from "../../assets/Line.png";
import { Link } from "react-router-dom";
import "swiper/css/effect-coverflow";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const Rooms = () => {
  return (
    <div className="rooms">
      <div className="container">
        <div className="row">
          <div>
            <h1>50+ Beautiful rooms inspiration</h1>
            <p>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Link to="/shop">
              <button className="showmore">Explore more</button>
            </Link>
          </div>
          <div className="slider">
            <div className="custom-next">
              <img src={line} />
            </div>
            <Swiper
              modules={[Pagination, Navigation, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.3}
              coverflowEffect={{
                rotate: 0,
                stretch: -80,
                depth: 300,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={{ nextEl: ".custom-next" }}
              pagination={{ clickable: true }}
              className="roomsSwiper" // ⬅️ SHUMË E RËNDËSISHME
            >
              <SwiperSlide>
                <img src={room1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={room2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={room3} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
