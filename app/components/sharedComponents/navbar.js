import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: "none", backgroundColor: "white" }}
      >
        <Toolbar className="flex flex-col py-[35px] gap-y-[42px]">
          {/* Top Section */}
          <Box className="flex justify-between items-center w-full">
            {/* Left Section */}
            <Box>
              <Box className="flex gap-[10px] lg:gap-[30px] items-center">
                {/* Hamburger Menu for Mobile */}
                <Box className="flex lg:hidden text-[#292D32]">
                  <MenuIcon />
                </Box>
                {/* Contact Information (hidden on small screens) */}
                <Box className="hidden lg:flex gap-1 items-center">
                  <WhatsAppIcon className="text-[#232323]" />
                  <Typography className="text-[#232323] text-[20px] font-light">
                    712-339-9294
                  </Typography>
                </Box>
                <Box className="hidden lg:flex gap-1 items-center">
                  <AccessTimeIcon className="text-[#232323]" />
                  <Typography className="text-[#232323] text-[20px] font-light">
                    Open Now
                  </Typography>
                </Box>
                <Box className="flex gap-1 items-center">
                  <img
                    src="/images/contact-gif.gif"
                    alt="Contact Us"
                    className="max-w-[100%] max-h-[100%] w-[24px] h-[24px]"
                  />
                  <Typography className="hidden lg:block text-[#232323] text-[20px] font-light">
                    Contact Us
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Logo */}
            <Box className="flex justify-center items-center">
              <img
                src="/images/Logo.svg"
                alt="Logo"
                className="w-[161px] h-[54px] max-w-[100%] max-h-[100%]"
              />
            </Box>
            {/* Icons Section */}
            <Box className="hidden lg:flex gap-[24px] items-center">
              <IconButton>
                <SearchIcon className="text-[#232323]" />
              </IconButton>
              <IconButton>
                <PersonOutlineOutlinedIcon className="text-[#232323]" />
              </IconButton>
              <IconButton>
                <FavoriteBorderOutlinedIcon className="text-[#232323]" />
              </IconButton>
              <IconButton className="relative">
                <Box
                  component="span"
                  className="absolute right-[-2px] top-[7px] text-center w-[17px] h-[17px] bg-[#232323] text-[12px] text-white rounded-full"
                >
                  2
                </Box>
                <WorkOutlineOutlinedIcon className="text-[#232323]" />
              </IconButton>
              <Box className="flex gap-[7px] items-center">
                <img src="/images/EN.svg" alt="EN" />
                <Typography className="text-[#232323]">EN</Typography>
              </Box>
            </Box>
            {/* Cart Icon for Mobile */}
            <Box className="flex lg:hidden">
              <IconButton className="relative">
                <Box
                  component="span"
                  className="absolute right-[-2px] top-[7px] text-center w-[17px] h-[17px] bg-[#232323] text-[12px] text-white rounded-full"
                >
                  2
                </Box>
                <WorkOutlineOutlinedIcon className="text-[#232323]" />
              </IconButton>
            </Box>
          </Box>
          {/* Navigation Menu */}
          <Box className="hidden lg:flex justify-center items-center gap-x-[50px]">
            {[
              "ENGAGEMENT RINGS",
              "WEDDING RINGS",
              "DIAMONDS",
              "GEMSTONES",
              "JEWELRY",
              "GIFTS",
              "ABOUT",
            ].map((item, index) => (
              <Typography
                key={index}
                className="text-[#232323] text-[18px] font-[400]"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
