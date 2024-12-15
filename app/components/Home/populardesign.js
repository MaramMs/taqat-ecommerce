import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
function PopularDesign({Item}) {

  return (
    <Card  className='flex flex-col-reverse lg:flex-row-reverse '>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', flexDirection:'column',gap:'11px' }}>
        <Box className='flex items-center gap-[11px]'>
            <Typography component='span' className='text-[#7D7B7C] text-[12px] md:text-[18px] font-normal'>
            BROOCHES 
            </Typography>
            <Box className='hidden md:block w-[8px] h-[8px] rounded bg-[#D9D9D9]'>
         
            </Box>
            <Typography component='span'  className=' hidden md:block text-[#7D7B7C] text-[18px] font-normal'>
            OTHER
            </Typography>

        </Box>

        <p className='text-[#232323]  text-[16px] md:text-[26px] font-normal mb-[24px]'>
    
        Fleur De Lis Key
        Brooch
        </p>
        <span
        
          
          className='text-[#232323] text-[20px] md:text-[24px] font-light'
        >
         £750
        </span>
      </CardContent>
     
    </Box>
    <Box className="relative flex-1 w-[147px] h-[147px]">
    <CardMedia
      component="img"
    
      image={Item.img}
      alt="Live from space album cover"
      style={{ height: 'inherit' }}
    />
    <Box className="absolute left-[7px] top-[8px] bg-[#232323] w-[53px] h-[28px] z-20">
      <p className="text-white text-center text-[18px]">New</p>
    </Box>
  </Box>


    
  </Card>
  )
}

export default PopularDesign
