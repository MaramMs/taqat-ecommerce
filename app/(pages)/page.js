'use client'
import Image from 'next/image'
import Hero from '../components/Home/hero'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import { useState } from 'react';
import CardList from '../components/Home/cardList';
export default function Home() {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    
   <Hero />

   <section className='mt-[80px] w-full' >
    <h2 className='text-[#000000] font-light text-[43px] text-center'>Luxury Jewelry</h2>
    <Box sx={{ width: '100%',mt:'50px',borderTop:'1px solid #D9D9D9' ,borderBottom:'1px solid #D9D9D9' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      centered
      className="flex justify-between w-full lg:gap-[90px]"
    >
     <Tab
    label="NEW ARRIVED"
    className={`text-[18px] font-semibold ${value === 0 ? 'text-blue-500' : 'text-[#000000]'} hover:text-blue-500`}
  />
  <Tab
    label="FEATURED"
    className={`text-[18px] font-semibold ${value === 1 ? 'text-blue-500' : 'text-[#000000]'} hover:text-blue-500`}
  />
  <Tab
    label="ON A SALE"
    className={`text-[18px] font-semibold ${value === 2 ? 'text-blue-500' : 'text-[#000000]'} hover:text-blue-500`}
  />
    </Tabs>
    </Box>

    <Box>
      <CardList />
    </Box>
   </section>
    </>
  )
}
