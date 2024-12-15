'use client'
import Image from 'next/image'
import Hero from '../components/Home/hero'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import { useState } from 'react';
import CardList from '../components/Home/cardList';
import ShopNow from '../components/Home/shopNow';
import PopularDesignList from '../components/Home/populardesignList';
import SwiperCustom from '../components/Home/swiperCustom';
import { FormControl, OutlinedInput } from '@mui/material';
export default function Home() {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    
   <Hero />

   <section className='px-[24px] mt-[80px] w-full' >
    <h2 className='text-[#000000] font-light text-[43px] text-center'>Luxury Jewelry</h2>
    <Box sx={{ width: '100%',mt:'50px',borderTop:'1px solid #D9D9D9' ,borderBottom:'1px solid #D9D9D9' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      centered
      className="gap-[48px] flex justify-between w-full lg:gap-[90px]"
    >
     <Tab
    label="NEW ARRIVED"
    className={`text-[12px] lg:text-[18px] font-semibold ${value === 0 ? 'text-blue-500' : 'text-[#000000]'} hover:text-blue-500`}
  />
  <Tab
    label="FEATURED"
    className={`text-[12px] lg:text-[18px] font-semibold ${value === 1 ? 'text-blue-500' : 'text-[#000000]'} hover:text-blue-500`}
  />
  <Tab
    label="ON A SALE"
    className={`text-[12px] lg:text-[18px] font-semibold ${value === 2 ? 'text-blue-500' : 'text-[#000000]'} hover:text-blue-500`}
  />
    </Tabs>
    </Box>

    <Box>
      <CardList />
    </Box>

    <Box className='mb-[40px] lg:mb-[100px]'>
      <ShopNow />
    </Box>
   </section>
   <section className='mb-[40px] px-[24px] md:pl-[24px] xxl:pr-[266px] w-full' >
    <h2 className='text-[#000000] text-[30px] lg:text-[48px] text-center font-light mb-[20px] lg:mb-[79px]'>Popular Designs</h2>
    <PopularDesignList />
   </section>
  
<div className='w-full flex flex-col-reverse lg:flex-col'>
<section className='bg-[#F9F9F9] flex justify-center flex-col items-center gap-[17px] py-[24px] md:py-[58px]  px-[21px] mt-[40px] lg:mt-[80px] w-full'> 
  <div className='md:px-[24px] w-[168px] lg:w-full flex flex-col justify-center  gap-[40px] lg:gap-[0px] lg:flex-row lg:justify-around '>
    <div className='flex gap-[22px]  lg:gap-[16px] lg:pb-[51px] '>
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.9624 9.2998L14.9999 15.6873L25.9624 9.3373" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 27.0123V15.6748" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4123 3.10011L5.73731 6.80011C4.2248 7.63761 2.9873 9.73761 2.9873 11.4626V18.5251C2.9873 20.2501 4.2248 22.3501 5.73731 23.1876L12.4123 26.9001C13.8373 27.6876 16.1748 27.6876 17.5998 26.9001L24.2748 23.1876C25.7873 22.3501 27.0248 20.2501 27.0248 18.5251V11.4626C27.0248 9.73761 25.7873 7.63761 24.2748 6.80011L17.5998 3.08761C16.1623 2.30011 13.8373 2.30011 12.4123 3.10011Z" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

     <span className='text-[14px]' >
     Free Delivery
     </span>
    </div>

    <div className='flex gap-[22px]  lg:gap-[16px]lg:pb-[51px] '>
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12.6499V16.3499C19 19.4699 16.09 21.9999 12.5 21.9999C8.91 21.9999 6 19.4699 6 16.3499V12.6499C6 15.7699 8.91 17.9999 12.5 17.9999C16.09 17.9999 19 15.7699 19 12.6499Z" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 7.65C19 8.56 18.75 9.4 18.31 10.12C17.24 11.88 15.04 13 12.5 13C9.96 13 7.76 11.88 6.69 10.12C6.25 9.4 6 8.56 6 7.65C6 6.09 6.72999 4.68 7.89999 3.66C9.07999 2.63 10.7 2 12.5 2C14.3 2 15.92 2.63 17.1 3.65C18.27 4.68 19 6.09 19 7.65Z" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 7.65V12.65C19 15.77 16.09 18 12.5 18C8.91 18 6 15.77 6 12.65V7.65C6 4.53 8.91 2 12.5 2C14.3 2 15.92 2.63 17.1 3.65C18.27 4.68 19 6.09 19 7.65Z" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


     <span className='text-[14px]' >
     High End Products     </span>
    </div>

    <div className='flex gap-[22px]  lg:gap-[16px] lg:pb-[51px] '>
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 6.25V11.35C22.5 12.62 22.08 13.69 21.33 14.43C20.59 15.18 19.52 15.6 18.25 15.6V17.41C18.25 18.09 17.49 18.5 16.93 18.12L15.96 17.48C16.05 17.17 16.09 16.83 16.09 16.47V12.4C16.09 10.36 14.73 9 12.69 9H5.89999C5.75999 9 5.63 9.01002 5.5 9.02002V6.25C5.5 3.7 7.2 2 9.75 2H18.25C20.8 2 22.5 3.7 22.5 6.25Z" stroke="#232323" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.09 12.4V16.47C16.09 16.83 16.05 17.17 15.96 17.48C15.59 18.95 14.37 19.87 12.69 19.87H9.97L6.95 21.88C6.5 22.19 5.89999 21.86 5.89999 21.32V19.87C4.87999 19.87 4.03 19.53 3.44 18.94C2.84 18.34 2.5 17.49 2.5 16.47V12.4C2.5 10.5 3.68 9.19002 5.5 9.02002C5.63 9.01002 5.75999 9 5.89999 9H12.69C14.73 9 16.09 10.36 16.09 12.4Z" stroke="#232323" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


     <span className='text-[14px]' >
     24/7 Support
     </span>
    </div>

  

    <div className='flex gap-[22px]  lg:gap-[16px] lg:pb-[51px] '>
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 15C16.2279 15 19.25 12.0899 19.25 8.5C19.25 4.91015 16.2279 2 12.5 2C8.77208 2 5.75 4.91015 5.75 8.5C5.75 12.0899 8.77208 15 12.5 15Z" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.01999 13.5198L8.01001 20.8998C8.01001 21.7998 8.64001 22.2398 9.42001 21.8698L12.1 20.5999C12.32 20.4899 12.69 20.4899 12.91 20.5999L15.6 21.8698C16.37 22.2298 17.01 21.7998 17.01 20.8998V13.3398" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


     <span className='text-[14px]' >
     High quality
     </span>
    </div>


  </div>





<div className='hidden lg:visible h-[1px] px-0 w-full bg-[#232323] mb-[90.21px]'></div>
 
 <div className="w-full block">
  <h2 className="text-[20px] lg:text-[45px] text-center text-black font-light lg:mb-[40px]">Customers Reviews</h2>
  <img src="/images/line.svg" alt="Line Decoration" className='m-auto' />
  <div className="lg:mt-[80.34px] w-full ">
    <SwiperCustom />
  </div>
</div>






  </section>
<Box className='px-[16px] flex-col gap-[22px] lg:flex-row flex justify-center items-center lg:gap-[87px] lg:mb-[94px] lg:border-t  lg:border-t-[#181818] lg:py-[76px] ' >
    <Box className='flex flex-col gap-[22px] md:flex md:flex-row items-center md:gap-[48px]'>
     <Box>
      <img  src='/images/email.svg'/>
     </Box>
     <p className='text-[#181818]  text-[18px] lg:text-[38px]'>
     Subscribe To Newsletter
     </p>
    </Box>



<Box className='w-full lg:w-auto gap-[22px] lg:gap-[0px] flex flex-col lg:flex-row'>
<FormControl className='w-full' variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
           className='p-0'
            placeholder='Your Email'
          />
        </FormControl>
        <button className="bg-[#232323] lg:w-[178px]  text-white text-[17px] py-[11px] px-[42px]" >SUBSCRIBE</button>

</Box>


  </Box>
</div>


 


    </>
  )
}
