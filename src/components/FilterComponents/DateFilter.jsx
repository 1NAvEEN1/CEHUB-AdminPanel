import {
  Grid,
  IconButton,
  TextField,
  Typography,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const DateFilter = ({ date, setDate,today }) => {
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
      width={180}
      border={"1px solid #EFF0F6"}
      borderRadius={5}
      pl={1}
    >
      <Box>
        <Typography color={"#000000B3"}>
          Time : <b>{date === today ? "All-time" : date}</b>
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            value={dayjs(date)}
            onChange={(newDate) => setDate(newDate.format("YYYY-MM-DD"))}
          />
        </LocalizationProvider>
      </Menu>
    </Box>
  );
};

export default DateFilter;
