import {
  IconButton,
  Typography,
  Menu,
  Box,
  Divider,
  Grid,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const SortingSelect = ({ sorting, setSorting }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const setSort = (data) => {
    setSorting((prevSorting) => ({
      ...prevSorting,
      type: data,
    }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <Box
        sx={{
          bgcolor: "#4D4D4D1A",
          width: 140,
          borderRadius: 1,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Typography fontSize={12} color={"#4D4D4D"} fontWeight={500}>
          {sorting.type}
        </Typography>
        <IconButton onClick={handleClick} size="small">
          {open ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          )}
        </IconButton>
      </Box>
      <Box>
        <IconButton size="small">
          <Grid container m={-1} mt={-0.5} mb={-1} ml={-1.5} mr={-1.3}>
            <Grid item xs={12}>
              <ArrowDropUpIcon />
            </Grid>
            <Grid item xs={12} mt={-2.2}>
              <ArrowDropDownIcon />
            </Grid>
          </Grid>
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => setSort("Company name")}>
          <Typography
            color={sorting.type == "Company name" ? "#F47621" : "black"}
          >
            Company name
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => setSort("Latest Date")}>
          <Typography
            color={sorting.type == "Latest Date" ? "#F47621" : "black"}
          >
            Latest Date
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SortingSelect;
