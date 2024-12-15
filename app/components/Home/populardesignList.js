import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import PopularDesign from "./populardesign";
function PopularDesignList() {
  const cardItem = [
    {
      img: "/images/products/2.png",
    },
    {
      img: "/images/products/3.png",
    },
    {
      img: "/images/products/4.png",
    },
    {
      img: "/images/products/5.png",
    },
    {
      img: "/images/products/6.png",
    },
    {
        img: "/images/products/7.png",
      },
      {
        img: "/images/products/8.png",
      },
      {
        img: "/images/products/9.png",
      },
      {
        img: "/images/products/10.png",
      },
    
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={{ xs: '20px', sm: '40px', xl: '70px' }}columnSpacing={{ xs: '8px', sm: '13px', xl: '200px' }}>
        {cardItem?.map((Item, index) => (
          <Grid size={{ xs: 6, lg: 4 }} key={index} >
            <Box>
              <PopularDesign Item={Item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PopularDesignList;
