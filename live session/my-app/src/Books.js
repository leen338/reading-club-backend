
// import React, { useEffect , useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import'./Books.css';
// import Vol from './volume1.js'

export default function Book() {
  //  const [books, setBooks] = useState([]);
  //      useEffect(() => {
  //   fetch("http://localhost:5000/api/books")
  //     .then(res => res.json())
  //     .then(data => setBooks(data));
  // }, []);
  return (
    <>
        {/* <div>
      {books.map(book => (
        <div key={book._id}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-1.jpg"  alt="book"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-2.jpg" alt="book" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-3.jpg"  alt="book"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-4.jpg" alt="book"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-5.jpg"  alt="book"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-6.jpg" alt="book"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-7.jpg" alt="book"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-8.jpg" alt="book"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/abstract-9.jpg" alt="book"/>
        </SwiperSlide>
      </Swiper>
      {/* <Vol/> */}
    </>
  );
}