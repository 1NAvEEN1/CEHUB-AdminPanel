import {
  IconButton,
  Typography,
  Menu,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

//----------------------------Progress Bar Stylings--------------------------------//
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F47621" : "#F47621",
  },
}));

//----------------------------PercentageBar Re-useable component--------------------------------//
const PercentageBar = ({ data }) => {
  console.log(data);
  return (
    <Grid container>
      <Grid item xs={10} xl={11} pt={1} pr={1}>
        <BorderLinearProgress variant="determinate" value={data.percentage} />
        <Typography ml={0.5} mt={0.5} color={"#000000B3"} fontWeight={500}>
          {data.status}
        </Typography>
      </Grid>
      <Grid item xs={2} xl={1}>
        <Typography textAlign={"end"} variant="h5" fontWeight={600}>
          {data.percentage + "%"}
        </Typography>
        <Typography textAlign={"end"} color={"#000000B3"} mt={-0.5}>
          {data.count}
        </Typography>
      </Grid>
    </Grid>
  );
};

export const SelectionStatusCard = ({ data }) => {
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
          <Typography color={"#000000B3"} fontWeight={500}>
            Selection status
          </Typography>
        </Box>
        <Box sx={{ display: "inline" }}>
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
      <Grid container height={"100%"} pt={3} pb={2}>
        <Grid item xs={12}>
          <PercentageBar data={data[0]} />
        </Grid>
        <Grid item xs={12}>
          <PercentageBar data={data[1]} />
        </Grid>
        <Grid item xs={12}>
          <PercentageBar data={data[2]} />
        </Grid>
      </Grid>
    </Box>
  );
};
