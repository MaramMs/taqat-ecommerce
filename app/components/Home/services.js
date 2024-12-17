import React from 'react'

const Services = ({item}) => {
  return (
    <div className='flex gap-[22px] lg:gap-[16px] lg:pb-[51px] '>
  <img src={item.img} width={25} height={24}/>

     <span className='text-[14px]' >
    {item.title}
     </span>
    </div>
  )
}

export default Services
