import React from 'react'
import CardCustom from './card'
import { Box } from '@mui/material'

function CardList() {
  const products = [
    {
      id:'1',
      img:'/images/products/12.png',
      title: '0.23 Carat Princess Diamond',
      description: '0.23 Carat Princess Diamond',
      price:'1,800'
    },
    {
      id:'2',
      img:'/images/products/13.png',
      title: '0.23 Carat Princess Diamond',
      description: '0.23 Carat Princess Diamond',
       price:'1,800'
    },
    {
      id:'3',
      img:'/images/products/17.png',
      title: '0.23 Carat Princess Diamond',
      description: '0.23 Carat Princess Diamond',
       price:'1,800'
    },
    {
      id:'4',
      img:'/images/products/14.png',
      title: '0.23 Carat Princess Diamond',
      description: '0.23 Carat Princess Diamond',
       price:'1,800'
    },
    {
      id:'5',
      img:'/images/products/15.png',
      title: '0.23 Carat Princess Diamond',
      description: '0.23 Carat Princess Diamond',
       price:'1,800'
    },
    {
      id:'6',
      img:'/images/products/16.png',
      title: '0.23 Carat Princess Diamond',
      description: '0.23 Carat Princess Diamond',
       price:'1,800'
    },
    {
      id:'7',
      img:'/images/products/1.png',
      title: '0.23 Carat Princess Diamond',
      description: 'This is product 1',
       price:'1,800'
    },
    {
      id:'8',
      img:'/images/products/15.png',
      title: '0.23 Carat Princess Diamond',
      description: 'This is product 1',
       price:'1,800'
    },
  ]
  return (
<Box className='lg:px-[24px] lg:mb-[100px] lg:mt-[70px] grid grid-cols-2  lg:grid-cols-4 gap-y-[40px] gap-x-[14px]'>
  {
    products.map((product, index) => (
      <CardCustom key={index} product={product} />
    ))
  }
</Box>


  )
}

export default CardList
