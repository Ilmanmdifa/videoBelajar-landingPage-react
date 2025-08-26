import React from "react";
import burgerMenu from "../../assets/images/home/burger-menu.png";
import logoutIcon from "../../assets/images/home/logout.png";
import avatarProfile from "../../assets/images/home/avatar-profile.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* mobile menu*/}
      <div className="w-11 block md:hidden">
        {" "}
        <Button
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <img src={burgerMenu} alt="Burger Menu" className="h-6" />
        </Button>
      </div>

      {/* larger screen menu*/}
      <div className="hidden w-11 md:flex md:justify-center md:items-center gap-5">
        <Link className="text-base text-[#333333ad] hover:text-[#f64920]">
          Kategori
        </Link>{" "}
        <Button
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <img src={avatarProfile} alt="User Profile" className="h-8" />
        </Button>
      </div>

      {/* dropdown content */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
          style: {
            maxWidth: "280px",
          },
        }}
      >
        <div className="text-[#333333AD]">
          <div className="md:hidden">
            <MenuItem onClick={handleClose}>Kategori</MenuItem>
          </div>
          <MenuItem onClick={handleClose}>Profile Saya</MenuItem>
          <MenuItem onClick={handleClose}>Kelas Saya</MenuItem>
          <MenuItem onClick={handleClose}>Pesanan Saya</MenuItem>
          <MenuItem onClick={handleClose} className="gap-1">
            <span className="text-[#FF5C2B]">Keluar</span>
            <img src={logoutIcon} alt="" />
          </MenuItem>
        </div>
      </Menu>
    </>
  );
};

export default NavMenu;
