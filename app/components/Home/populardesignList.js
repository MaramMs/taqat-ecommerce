import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import PopularDesign from "./populardesign";
function PopularDesignList() {
  const cardItem = [
    {
      img: "/images/product/2.png",
    },
    {
      img: "/images/product/3.png",
    },
    {
      img: "/images/product/4.png",
    },
    {
      img: "/images/product/5.png",
    },
    {
      img: "/images/product/6.png",
    },
    {
        img: "/images/product/7.png",
      },
      {
        img: "/images/product/8.png",
      },
      {
        img: "/images/product/9.png",
      },
      {
        img: "/images/product/10.png",
      },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing="70px" columnSpacing={{ xs: '8px', sm: '13px', md: '202px' }}>
        {cardItem?.map((Item, index) => (
          <Grid size={{ xs: 6, md: 4 }} key={index}>
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
