import { IconButton, Typography, Menu, Box } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const ProvinceFilter = ({ province }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={250}
      border={"1px solid #EFF0F6"}
      borderRadius={5}
      pl={1}
    >
      <Box>
        <Typography color={"#000000B3"}>
          Province : <b>{province}</b>
        </Typography>
      </Box>
      <Box sx={{ display: "inline" }}>
        <IconButton onClick={handleClick}>
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        h
      </Menu>
    </Box>
  );
};
