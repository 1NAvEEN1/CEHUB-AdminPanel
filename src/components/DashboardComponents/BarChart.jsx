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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  // height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F4762133",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F47621" : "#F47621",
  },
}));

const PercentageBar = ({ data, total, maxCount }) => {
  let percentage = ((data.count / maxCount) * 100).toFixed(0);
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <BorderLinearProgress
          sx={{
            width: 10,
            height: 180,
            "& span.MuiLinearProgress-bar": {
              transform: `translateY(${100 - percentage}%) !important`, //has to have !important
            },
          }}
          variant="determinate"
          value={percentage}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography textAlign={"center"} color={"#838383"} fontSize={11}>
          {data.month}
        </Typography>
      </Grid>
    </Grid>
  );
};

export const BarChart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // let monthsLabel = [
  //   "JAN",
  //   "FEB",
  //   "MAR",
  //   "APR",
  //   "MAY",
  //   "JUN",
  //   "JUL",
  //   "AUG",
  //   "SEP",
  //   "OCT",
  //   "NOV",
  //   "DEC",
  // ];

  let data = [
    { month: "JAN", count: 100 },
    { month: "FEB", count: 130 },
    { month: "MAR", count: 130 },
    { month: "APR", count: 230 },
    { month: "MAY", count: 250 },
    { month: "JUN", count: 200 },
    { month: "JUL", count: 230 },
    { month: "AUG", count: 100 },
    { month: "SEP", count: 250 },
    { month: "OCT", count: 300 },
    { month: "NOV", count: 350 },
    { month: "DEC", count: 400 },
  ];

  const total = data.reduce((acc, cur) => acc + cur.count, 0);
  const maxCount = data.reduce((max, item) => Math.max(max, item.count), 0);
  const nearestLargest100 = Math.ceil(maxCount / 100) * 100;
  const labelValues = Array.from(
    { length: 5 },
    (_, index) => index * (nearestLargest100 / 4)
  );

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
      <Box display={"flex"} justifyContent={"center"}>
        <Grid container height={"100%"} mt={1.5} ml={-3} maxWidth={1000}>
          <Grid item xs={1}>
            <Grid container height={200}>
              {labelValues.reverse().map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Typography textAlign={"end"} color={"#838383"} fontSize={11}>
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Grid container spacing={1}>
              {data.map((item, key) => (
                <Grid item key={key} xs={1}>
                  <PercentageBar
                    data={item}
                    total={total}
                    maxCount={maxCount}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
