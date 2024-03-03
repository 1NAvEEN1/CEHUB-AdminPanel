import { IconButton, Typography, Menu, Box, Divider } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const BarChart = ({ data }) => {
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
      width={"100%"}
      height={265}
      border={"1px solid #EFF0F6"}
      borderRadius={3}
      p={2}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={-1}
      >
        <Box>
          <Typography color={"#000000B3"} fontWeight={600}>
            Supplier Acquisition
          </Typography>
        </Box>
        <Box sx={{ display: "inline" }} fontWeight={600}>
          All{" "}
          <IconButton onClick={handleClick}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <Box
            width={100}
            height={100}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            All
          </Box>
        </Menu>
      </Box>
      <Divider />
    </Box>
  );
};
