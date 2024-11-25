'use client'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles';

const MainButton = styled(Button)(({ theme }) => ({
    color: "#232323", // Custom text color
    backgroundColor: "#fff", // Custom background color
    fontSize: "14px", // Custom font size
    fontWeight: 300, // Light font weight
   width:'max-content',
   padding:'4px 10px',
   marginTop:'10px',
   [theme.breakpoints.up("lg")]: {
    // Applies on medium (md) screens and up
    padding: "20px 40px",
  },
  }));
function    Hero() {
   
  return (
   <Box className="bg-[url('/images/hero.png')] min-h-[116px] lg:min-h-[500px] w-full bg-cover bg-center">
<Box className='flex flex-col m-[40px] lg:mt-[123px] lg:ml-[90px]'>
<h1 className="text-[#232323] font-light text-[20px] lg:text-[75px] mb-[5px]">
  Blue Queen 
  <span className="block md:inline-block">Collection</span>
</h1>


    <span className='text-[10px] lg:text-[20px] font-normal text-[#232323]'>
    -50% SALE
    </span>

    <MainButton
     
    >
      READ MORE
    </MainButton>
</Box>

   </Box>

  )
}

export default Hero