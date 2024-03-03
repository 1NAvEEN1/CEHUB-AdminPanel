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

const ListCard = ({ data, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState("Highest");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortData = (data, order) => {
    // Clone the array to avoid mutating the original data
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      if (order === "Highest") {
        return b.count - a.count; // Sort in descending order
      } else if (order === "Lowest") {
        return a.count - b.count; // Sort in ascending order
      } else {
        return 0; // Default to no sorting
      }
    });

    return sortedData;
  };

  let sortedData = sortData(data, sort);

  return (
    <Box
      width={"100%"}
      minHeight={265}
      border={"1px solid #EFF0F6"}
      borderRadius={3}
      p={2}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={-1}
        mr={-1}
      >
        <Box>
          <Typography color={"#000000B3"} fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "inline" }} fontWeight={500} color={"primary.main"}>
          {sort + " "}
          <IconButton onClick={handleClick}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={() => setSort("Highest")}>
            <Typography color={sort == "Highest" ? "#F47621" : "black"}>
              Highest
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => setSort("Lowest")}>
            <Typography color={sort == "Lowest" ? "#F47621" : "black"}>
              Lowest
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Divider />
      <Grid container spacing={1} mt={1}>
        {sortedData.map((item, key) => (
          <Grid
            item
            key={key}
            xs={12}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography color={"#000000B3"} fontWeight={500}>
              {item?.name}
            </Typography>
            <Typography fontWeight={600}>{item?.count}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListCard;
