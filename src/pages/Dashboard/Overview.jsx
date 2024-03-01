import { Grid } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import DateFilter from "../../components/FilterComponents/DateFilter";

const Overview = () => {
  const today = dayjs().format("YYYY-MM-DD");
  const [date, setDate] = useState(today);

  return (
    <Grid container>
      <Grid item xs={12}>
        <DateFilter date={date} setDate={setDate} today={today} />
      </Grid>
    </Grid>
  );
};

export default Overview;
