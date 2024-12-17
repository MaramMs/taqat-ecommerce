'use client'
import Hero from '../components/Home/hero'
import Box from '@mui/material/Box';
import CardList from '../components/Home/cardList';
import ShopNow from '../components/Home/shopNow';
import PopularDesignList from '../components/Home/populardesignList';
import SwiperCustom from '../components/Home/swiperCustom';
import { FormControl, OutlinedInput } from '@mui/material';
import TabsCustom from '../components/Home/tabsCustom';
import Services from '../components/Home/services';
export default function Home() {
  const serviceItems = [
    {
      id:'1',
      img:'/images/deliver.svg',
      title:'  Free Delivery'
    },
    {
      id:'2',
      img:'/images/high.svg',
      title:'High End Products '
    },
    {
      id:'3',
      img:'/images/support.svg',
      title:'24/7 Support'
    },
    {
      id:'4',
      img:'/images/quality.svg',
      title:'High quality'
    }
  ]

  return (
    <>
    
   <Hero />

   <section className='px-[24px] mt-[80px] w-full' >
    <h2 className='text-[#000000] font-light text-[43px] text-center'>Luxury Jewelry</h2>
    <Box sx={{ width: '100%',mt:'50px',borderTop:'1px solid #D9D9D9' ,borderBottom:'1px solid #D9D9D9' }}>
    <TabsCustom />
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

    {
      serviceItems.map((item) =>(
        <Services item={item}/>
      ))
    }


  </div>





<div className='hidden lg:visible h-[1px] px-0 w-full bg-[#232323] mb-[90.21px]'></div>
 
 <div className="w-full block">
  <h2 className="text-[20px] lg:text-[45px] text-center text-black font-light lg:mb-[40px]">Customers Reviews</h2>
  <img src="/images/Line.svg" alt="Line Decoration" className='m-auto' />
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
