// src/components/ProjectSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectSlider({ images }) {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={48}
      centeredSlides
      loop
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt="" loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}