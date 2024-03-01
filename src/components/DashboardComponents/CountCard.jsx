import { Box, Typography } from "@mui/material";
import React from "react";

function CountCard({ title, count }) {
  const formatCount = (count) => {
    if (typeof count === "string" && count.includes("%")) {
      // If count contains "%" mark, return it as is
      return count;
    } else {
      // If count is just a number, format it with commas
      return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  return (
    <Box
      width={250}
      height={100}
      border={"1px solid #EFF0F6"}
      borderRadius={3}
      p={2}
    >
      <Typography color={"#000000B3"} fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="h3" fontWeight={600}>{formatCount(count)}</Typography>
    </Box>
  );
}

export default CountCard;
