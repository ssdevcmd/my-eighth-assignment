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

export default function Home() {
  return (
    <div>
      {/* <h2 className="text-4xl text-center text-orange-500">Homepage</h2> */}

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
          <Image src={upgradeImage}
          alt="banner image"
          width={800}
          height={400}
          className="w-full"
        ></Image>
          Upgrade Your Skills Today</SwiperSlide>

        <SwiperSlide>
          <Image src={industryImage}
          alt="banner image"
          width={800}
          height={400}
          className="w-full"
        >
        </Image>
        Learn from Industry Experts</SwiperSlide>

        <SwiperSlide><Image src={learningImage}
          alt="banner image"
          width={800}
          height={400}
          className="w-full h-full"
        >
        </Image>Start Your Learning Journey</SwiperSlide>
      </Swiper>
    </div>
  );
}
