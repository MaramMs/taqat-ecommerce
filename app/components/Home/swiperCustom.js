import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const SwiperCustom = () => {
  const swiperItems = [
    {
      id: "1",
      des: "    Tempor sit nunc, ac et non eu. Ultrices blandit vehicula vestibulum aliquam. Imperdiet faucibus at urna, sagittis.",
      customerName: "    Carla Ekstrom Bothman",
    },
    {
      id: "2",
      des: "    Tempor sit nunc, ac et non eu. Ultrices blandit vehicula vestibulum aliquam. Imperdiet faucibus at urna, sagittis.",
      customerName: "    Carla Ekstrom Bothman",
    },
    {
      id: "3",
      des: "    Tempor sit nunc, ac et non eu. Ultrices blandit vehicula vestibulum aliquam. Imperdiet faucibus at urna, sagittis.",
      customerName: "    Carla Ekstrom Bothman",
    },
  ];
  return (
    <div className="swiper-container-wrapper overflow-visible">
  <Swiper
    breakpoints={{
      // Mobile screens
      0: {
        slidesPerView: 1,
        spaceBetween:8,
      },
      // Large screens (1024px and above)
      1024: {
        slidesPerView: 2,
        spaceBetween:20
      },
    }}
    centeredSlides={true}
    cssMode={true}
    navigation={true}
    pagination={{ clickable: true }}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    className="mySwiper"
  >
    {swiperItems.map((swiperItem) => (
      <SwiperSlide key={swiperItem.id} className="relative !flex flex-col justify-center gap-[16px] px-[30px] py-[20px]">
        {/* Image positioned outside the slide */}
        <Box className='m-auto flex justify-center items-center'>
          <Image
            src="/images/swiper-img.png"
            width={53.48}
            height={55}
            className="rounded-full"
          />
        </Box>

        {/* Slide Content */}
        <Box className="relative flex flex-col justify-center items-center">
          <Typography
            component="p"
            className="text-center lg:mt-[50px] mb-[9px] md:!mb-[47.35px] text-[#181818] !leading-[2] md:w-[80%] text-[12px] md:!text-[19px]"
          >
            {swiperItem.des}
          </Typography>
          <Typography
            component="span"
            className="text-[#7D7B7C] text-[12px] md:!mb-[88.77px]"
          >
            {swiperItem.customerName}
          </Typography>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  

  );
};

export default SwiperCustom;


