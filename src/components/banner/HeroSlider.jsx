"use client";
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import upgradeImage from '@/assets/upgrade.webp'
import industryImage from '@/assets/compatible.jpg'
import learningImage from '@/assets/learning.webp'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const HeroSlider = () => {
    return (
        <div>
             <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2 className="text-4xl font-bold text-center">Upgrade Your Skills Today</h2>
          <Image src={upgradeImage}
          alt="banner image"
          width={800}
          height={400}
          className="w-full"
        ></Image>
          </SwiperSlide>

        <SwiperSlide>
           <h2 className="text-4xl font-bold text-center">Learn from Industry Experts</h2>
          <Image src={industryImage}
          alt="banner image"
          width={800}
          height={400}
          className="w-full"
        >
        </Image>
        </SwiperSlide>

        <SwiperSlide>
           <h2 className="text-4xl font-bold text-center">Start Your Learning Journey</h2>
          <Image src={learningImage}
          alt="banner image"
          width={800}
          height={400}
          className="w-full h-full"
        >
        </Image></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default HeroSlider;