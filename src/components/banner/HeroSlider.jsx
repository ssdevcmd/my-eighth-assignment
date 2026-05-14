"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Pagination, Autoplay } from "swiper/modules";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

const slides = [
  {
    title: "Upgrade Your Skills Today",
    description: "Start learning modern web development with real projects.",
    icon: <FaGraduationCap></FaGraduationCap>
  },
  {
    title: "Learn from Industry Experts",
    description: "Get practical knowledge from experienced developers.",
    icon: <MdSchool></MdSchool>
  },
  {
    title: "Build Real World Projects",
    description: "Improve your portfolio with hands-on coding experience.",
    icon: <HiSparkles></HiSparkles>
  },
];


const HeroSlider = () => {
  return (
    <div className="container mx-auto p-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation ,Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center rounded-2xl container mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
                <span className="text-amber-500">{slide.icon}</span>
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;