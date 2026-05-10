"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import upgradeImage from "@/assets/upgrade.webp";
import industryImage from "@/assets/compatible.jpg";
import learningImage from "@/assets/learning.webp";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "Upgrade Your Skills Today",
    image: upgradeImage,
  },
  {
    id: 2,
    title: "Learn from Industry Experts",
    image: industryImage,
  },
  {
    id: 3,
    title: "Start Your Learning Journey",
    image: learningImage,
  },
];

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-10">
              <h2 className="text-4xl md:text-7xl font-bold text-center">
                {slide.title}
              </h2>

              <Image
                src={slide.image}
                alt={slide.title}
                width={600}
                height={400}
                className="w-full max-w-4xl rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;