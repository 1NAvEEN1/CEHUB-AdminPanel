import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const Header = ({ setOpen, open }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const gotoProfile = () => {
    //navigate("../profile");
    console.log("Profile");
  };

  const handleSignOut = () => {
    navigate("../login");
  };
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(!open)}
        edge="start"
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </Toolbar>
  );
};

export default Header;
