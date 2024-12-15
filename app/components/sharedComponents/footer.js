import { Box, Button, Container, Divider, FormControl, List, ListItem, ListSubheader, OutlinedInput, TextField, Typography } from '@mui/material'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export const Footer = () => {
  return (


<Box className='mt-[40px] lg:mt-[0px]flex flex-col '>
<Box className='px-[24px] flex flex-col md:flex-row justify-between'>
<List
className='flex flex-col gap-y-[11px]'

subheader={
    <ListSubheader component="p" id="nested-list-subheader" className='text-[#232323] text-[18px] lg:text-[21px] font-light'  >
      MY ACCOUNT
    </ListSubheader>
  }
>
<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>

  <Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

  </Box>

My account
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px]font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Wishlist
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Cart
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Checkout</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Maintenance Mode</ListItem>


<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Register Now</ListItem>
</List>


<List
className='flex flex-col gap-y-[11px]'

subheader={
    <ListSubheader component="p" id="nested-list-subheader" className='text-[#232323] text-[18px] lg:text-[21px] font-light'  >
INFORMATION    </ListSubheader>
  }
>
<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>

  <Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

  </Box>

  About Us
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Our Blog
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px]font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
FAQ
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Contacts

</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Terms & Conditions

</ListItem>


<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px]font-light flex gap-[22px]'>
<Box component='span' className='w-[4px] h-[4px] rounded-full border border-[#232323]'>

</Box>
Refund and Returns Policy
</ListItem>
</List>

<List

className='flex flex-col gap-y-[11px]'
subheader={
    <ListSubheader component="p" id="nested-list-subheader" className='text-[#232323] text-[18px] lg:text-[21px] font-light'  >
OUR CONTACTS   


</ListSubheader>
  }
>
<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>

  <Box component='span' className='text-[#232323]'>
  <FmdGoodOutlinedIcon />
  </Box>

  283 N. Glenwood Street, Levittown, NY 11756
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='text-[#232323]'>
<CallOutlinedIcon />
</Box>
712-339-9294
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='text-[#232323]'>
<AccessTimeOutlinedIcon />
</Box>
Mon-Fri: 10:00 - 18:00
</ListItem>

<ListItem className='text-[#7D7B7C] text-[16px] lg:text-[19px] font-light flex gap-[22px]'>
<Box component='span' className='text-[#232323]'>
<MailOutlineOutlinedIcon />
</Box>
info@goldish-jew.com

</ListItem>



<ListItem className='flex gap-[20px] md:gap-[16px] mt-[50px]' >
  <Box className='w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full border border-[#232323] flex justify-center items-center'>

  <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6734 2.96159H9V0.217788C8.22112 0.0844261 7.43408 0.0116392 6.64519 0C4.24254 0 2.67198 1.54352 2.67198 4.33801V6.79436H0V10.0174H2.67198V17.8087C3.78204 18.067 4.93207 18.0637 6.04079 17.799V17.7931C6.01407 17.7982 5.98738 17.8041 5.95905 17.8087V10.0174H8.41002L8.87632 6.79436H5.95905V4.7028C5.95905 3.82115 6.36654 2.96159 7.6734 2.96159Z" fill="#232323"/>
</svg>


  </Box>

  <Box className='w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full border border-[#232323] flex justify-center items-center'>

  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8409 1.8335H7.15921C3.82254 1.8335 1.83337 3.82266 1.83337 7.15933V14.8318C1.83337 18.1777 3.82254 20.1668 7.15921 20.1668H14.8317C18.1684 20.1668 20.1575 18.1777 20.1575 14.841V7.15933C20.1667 3.82266 18.1775 1.8335 14.8409 1.8335ZM11 14.5568C9.03837 14.5568 7.44337 12.9618 7.44337 11.0002C7.44337 9.0385 9.03837 7.4435 11 7.4435C12.9617 7.4435 14.5567 9.0385 14.5567 11.0002C14.5567 12.9618 12.9617 14.5568 11 14.5568ZM16.4267 6.30683C16.3809 6.41683 16.3167 6.51766 16.2342 6.60933C16.1425 6.69183 16.0417 6.756 15.9317 6.80183C15.8217 6.84766 15.7025 6.87516 15.5834 6.87516C15.3359 6.87516 15.1067 6.7835 14.9325 6.60933C14.85 6.51766 14.7859 6.41683 14.74 6.30683C14.6942 6.19683 14.6667 6.07766 14.6667 5.9585C14.6667 5.83933 14.6942 5.72016 14.74 5.61016C14.7859 5.491 14.85 5.39933 14.9325 5.30766C15.1434 5.09683 15.4642 4.996 15.7575 5.06016C15.8217 5.06933 15.8767 5.08766 15.9317 5.11516C15.9867 5.1335 16.0417 5.161 16.0967 5.19766C16.1425 5.22516 16.1884 5.271 16.2342 5.30766C16.3167 5.39933 16.3809 5.491 16.4267 5.61016C16.4725 5.72016 16.5 5.83933 16.5 5.9585C16.5 6.07766 16.4725 6.19683 16.4267 6.30683Z" fill="#232323"/>
</svg>



</Box>

<Box className='w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full border border-[#232323] flex justify-center items-center'>

<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.249411 0.312012L8.66686 11.5666L0.196289 20.7178H2.10316L9.51951 12.7062L15.5125 20.7178H21.9999L13.1085 8.8298L20.9929 0.312012H19.0861L12.255 7.69022L6.73685 0.312012H0.249411ZM3.05295 1.71628H6.03493L19.196 19.3135H16.214L3.05295 1.71628Z" fill="#232323"/>
</svg>



</Box>

<Box className='w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full border border-[#232323] flex justify-center items-center'>

<svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.7405 1.2898C23.1132 1.66482 23.3809 2.1312 23.5167 2.64219C24.0185 4.52762 24.0185 8.46082 24.0185 8.46082C24.0185 8.46082 24.0185 12.3944 23.5167 14.2794C23.3809 14.7905 23.1132 15.257 22.7405 15.6321C22.3678 16.0072 21.9032 16.2778 21.393 16.4168C19.52 16.922 12.0092 16.922 12.0092 16.922C12.0092 16.922 4.49856 16.922 2.6256 16.4168C2.11541 16.2778 1.65066 16.0072 1.27795 15.6321C0.905238 15.257 0.637632 14.7905 0.501887 14.2794C3.83528e-05 12.3944 0 8.46082 0 8.46082C0 8.46082 3.83528e-05 4.52762 0.501887 2.64219C0.637655 2.13118 0.905236 1.66478 1.27795 1.28975C1.65066 0.914717 2.11544 0.644187 2.6256 0.505252C4.49856 4.7716e-06 12.0092 0 12.0092 0C12.0092 0 19.52 4.7716e-06 21.393 0.505252C21.9031 0.644222 22.3678 0.914769 22.7405 1.2898ZM15.8284 8.46023L9.55095 12.0313V4.88875L15.8284 8.46023Z" fill="#232323"/>
</svg>



</Box>

</ListItem>




</List>
</Box>

<Divider />

<Box className='px-[24px] flex flex-col md:flex-row justify-center md:justify-between  items-center py-[20px] mx-[23px] md:py-[32px]'>

<Typography variant="p" className='text-[#232323]  font-light text-[14px] md:text-[17px]'>
© 2024 Decoris Diamonds. All rights reserved.
</Typography>

<Box className='flex justify-between gap-[4px]  md:gap-[8px] items-center'>
    <Box className='px-[14px] py-[13px] w-[58px] h-[18px]'>
        <img src='/images/visa.svg' />
    </Box>

    <Box className='px-[14px] py-[13px]  w-[58px] h-[18px]'>
        <img src='/images/master.svg' />
    </Box>

    <Box className='px-[14px] py-[13px]  w-[58px] h-[18px]'>
        <img src='/images/pay.svg' />
    </Box>
    <Box className='px-[14px] py-[13px] w-[58px] h-[18px]'>
        <img src='/images/mada.svg' />
    </Box>
    <Box className='px-[14px] py-[13px]  w-[58px] h-[18px]'>
        <img src='/images/pay1.svg' />
    </Box>
</Box>

</Box>


    </Box>


  )
}
