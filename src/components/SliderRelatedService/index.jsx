"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function SliderRelatedService(data) {
  console.log(data);
  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        // When the screen width is <= 1024px (typically tablets like iPads)
        1024: {
          slidesPerView: 3, // 2 slides for tablets
          spaceBetween: 20, // You can adjust space for tablets as needed
        },
        // When the screen width is <= 768px (typically phones)
        768: {
          slidesPerView: 2, // 1 slide for phones
          spaceBetween: 15, // Adjust space for mobile devices
        },
      }}
      modules={[Navigation]}
      className="mySwiper imgItemServiceRelated"
    >
        
      {data.data.map((item, index) => (
        <SwiperSlide key={index}>
          <Link className="clear-style btnonSlider" href={`/our-service/${item.url}`}>
            <img src={`${item.path}${item.mainImg}`} alt={item.name} />
            <div className="info-sub-related">
              <h3>{item.name}</h3>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
