import React from 'react'
import CardCustom from './card'
import { Box } from '@mui/material'

function CardList() {
  return (
    <Box className='lg:px-[24px] lg:mb-[100px] lg:mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-[80px] lg:gap-x-[14px]'>

      <CardCustom />
      <CardCustom />
      <CardCustom />
      <CardCustom />
      <CardCustom />
      <CardCustom />
      <CardCustom />

      <CardCustom />
    
    </Box>
  )
}

export default CardList
