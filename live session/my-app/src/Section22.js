import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Section22.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Lovephoto from "./images/result (6).png";
import Comed from "./images/result (10).png";
import Action from "./images/result (2).png";
import Drama from "./images/result.png";
import Fantazy from "./images/result (9).png";
import Cartoon from "./images/result (7).png";
import Horor from "./images/result (8).png";
import Drag from "./images/dragon1.jpg";
import Rain from "./images/rain.jpg";
import Drag2 from "./images/dragon2.jpg";
import Black from "./images/black.jpg";
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Types() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <h2 className="word1">
               Romantic
            </h2>
            <img className='Love' src={Lovephoto} alt="Love"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className="word">
               Comedy
            </h2>
            <img className='Comed' src={Comed} alt="Comed"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className="word1">
               Action
            </h2>
            <img className='Action' src={Action} alt="Action"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className="word1">
              Drama
            </h2>
            <img className='Drama' src={Drama} alt="Drama"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className="word1">
               Cartoon
            </h2>
            <img className='Car' src={Cartoon} alt="Cartoon"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className="word1">
               Fantasy
            </h2>
            <img className='Fan' src={Fantazy} alt="Fantasy"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className="word1">
               Horor
            </h2>
            <img className='Horor' src={Horor} alt="Horor"/>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
