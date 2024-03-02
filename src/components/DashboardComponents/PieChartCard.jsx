import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const formatCount = (count) => {
  if (typeof count === "string" && count?.includes("%")) {
    // If count contains "%" mark, return it as is
    return count;
  } else {
    // If count is just a number, format it with commas
    return count?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

const Label = ({ data }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={1}
      >
        <Box
          sx={{
            bgcolor: data?.color,
            height: 10,
            width: 18,
            borderRadius: 1,
          }}
        ></Box>
        <Typography fontSize={12} fontWeight={700}>
          {data?.value + "%"}
        </Typography>
        <Typography fontSize={12} color={"#000000B3"} fontWeight={500}>
          {data?.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

const PieChartCard = ({ data }) => {
  return (
    <Box
      width={"100%"}
      height={265}
      border={"1px solid #EFF0F6"}
      borderRadius={3}
      p={2}
    >
      <Typography color={"#000000B3"} fontWeight={500}>
        {data?.title}
      </Typography>
      <Typography variant="h3" fontWeight={600}>
        {formatCount(data?.count)}
      </Typography>
      <Grid container>
        <Grid
          item
          xs={6}
          display={"flex"}
          alignItems={"center"}
          sx={{
            mt: {
              xs: -4,
              lg: -3,
              xl: -2,
            },
          }}
        >
          <Grid container spacing={1}>
            {data?.percentages?.map((percentage) => (
              <Grid item xs={12}>
                <Label data={percentage} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box display={"flex"} width={"100%"} mt={-5} ml={5}>
            <PieChart
              width={300}
              height={200}
              series={[
                {
                  data: data?.percentages,
                  innerRadius: 40,
                  outerRadius: 100,
                  paddingAngle: 2,
                  cornerRadius: 8,
                  startAngle: 0,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PieChartCard;
