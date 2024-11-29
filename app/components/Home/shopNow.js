import { Box, Button, Typography, Paper, Container } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid2";
import Image from "next/image";

function ShopNow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12  gap-[20px] md:gap-[45px]">
      {/* <!-- Left Column --> */}
      <div className=" relative col-span-1 md:col-span-4">
        <img
          src="/images/shop.jpeg"
          alt="Shop Main Image"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
        <div className="absolute pt-[66px] pb-[80px]  justify-center items-center  left-[5px] bottom-0  flex flex-col">
          <h5 className="mb-[34px] md:text-[53px] font-light text-center w-[60%] text-white leading-[76.5px]">Wood Jewelry Collection</h5>
          <span className="text-white md:text-[24px] mb-[42px]">New in our shop</span>
          <button className="text-[#232323] text-[20px] font-light bg-white border border-white py-[20px] px-[40px]">Shop Now</button>
        </div>
      </div>

      {/* <!-- Right Column --> */}
      <div className="col-span-1 md:col-span-8">
        <div className="grid grid-cols-1 md:grid-rows-2 gap-[20px] md:gap-[45px] ">
          {/* <!-- Top Row --> */}
          <div className="relative row-span-1  ">
            <img
              src="/images/shop2.png"
              alt="Shop Image 1"
              className="md:h-full h-[186px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#44456A] via-transparent to-transparent"></div>
            <div className="absolute  md:pb-[80px] left-[20px]  md:left-[69px] bottom-[22px] md:bottom-[111px]  top-[22px] md:top-[112px] flex flex-col">
          <h5 className="mb-[8px] md:mb-[34px] text-[20px] md:text-[53px] font-light text-center  text-white md:leading-[76.5px]">Every Friday Free Gifts</h5>
          <span className="text-white md:text-[24px] mb-[15px] md:mb-[42px]">Exclusive Jewelry Free</span>
          <button className="text-[#232323] text-[20px] font-light bg-white border border-white py-[11px] px-[18px] md:py-[20px] md:px-[40px] w-max">Shop Now</button>
        </div>
          </div>
     

          {/* <!-- Bottom Row: Two Columns --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[41px] row-span-1">
            <div className="relative overflow-hidden">
              <img
                src="/images/shop9.jpeg"
                alt="Shop Image 2"
                className="object-cover h-[186px] md:h-full w-full"
              />
            <div className="absolute  md:pb-[80px]  left-[20px] md:left-[40px] top-[22px] md:top-[85px] bottom-[22px] md:bottom-[85px]    flex flex-col">
          <h5 className="mb-[8px] md:mb-[34px] text-[20px] md:text-[53px]  md:w-[70%] font-light text-white md:leading-[76.5px]">Elegant Watches
          For Mans</h5>
          <span className="text-white text-[12px] md:text-[24px] mb-[15px] md:mb-[42px]">Best brands</span>
          <button className="text-[#232323] text-[20px] font-light bg-white border border-white py-[11px] md:py-[20px] px-[19px] md:px-[40px] w-max">Shop Now</button>
        </div>
            </div>
            <div className=" relative overflow-hidden">
              <img
                src="/images/shop3.png"
                alt="Shop Image 3"
                className="object-cover h-[186px] md:h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              <div className="absolute pb-[80px]  left-[20px] md:left-[40px] bottom-[22px] md:bottom-[87px] top-[22px] md:top-[83px]   flex flex-col">
          <h5 className="mb-[8px] md:mb-[34px] text-[20px] md:text-[53px] font-light  md:w-[60%] text-white md:leading-[76.5px]">
          Best Sets For Weddings
          </h5>
          <span className="text-white text-[12px] md:text-[24px] mb-[8px] md:mb-[42px]">Elegant collections</span>
          <button className="text-[#232323] text-[20px] font-light bg-white border border-white py-[11px] md-py-[20px] px-[19px] md:px-[40px] w-max">Shop Now</button>
        </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
