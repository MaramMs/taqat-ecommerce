import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

const TabsCustom = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
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
  )
}

export default TabsCustom