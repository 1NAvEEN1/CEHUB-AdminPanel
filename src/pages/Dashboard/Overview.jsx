import { Grid } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import DateFilter from "../../components/FilterComponents/DateFilter";
import { CategoryFilter } from "../../components/FilterComponents/CategoryFilter";
import { SubCategoryFilter } from "../../components/FilterComponents/SubCategoryFilter copy";
import { StatusFilter } from "../../components/FilterComponents/StatusFilter";
import { ProvinceFilter } from "../../components/FilterComponents/ProvinceFilter";
import CountCard from "../../components/DashboardComponents/CountCard";
import { BarChart } from "../../components/DashboardComponents/BarChart";
import { SelectionStatusCard } from "../../components/DashboardComponents/SelectionStatusCard";

const Overview = () => {
  const today = dayjs().format("YYYY-MM-DD");

  // ------------------Filter values-------------------------//
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [province, setProvince] = useState("All");

  // ------------------CountCards values-------------------------//
  const [counts, setCounts] = useState({
    totalSupplier: 1750,
    product: 1000,
    rawMaterial: 750,
    joinCount: 1545,
    joinPercentage: "95%",
  });

  return (
    <Grid container spacing={2} width={"100%"}>
      {/* --------------------------Filter Options---------------------------------- */}

      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <DateFilter date={date} setDate={setDate} today={today} />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <CategoryFilter category={category} setCategory={setCategory} />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <SubCategoryFilter
          subCategory={subCategory}
          setSubCategory={setSubCategory}
        />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <StatusFilter status={status} setStatus={setStatus} />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <ProvinceFilter province={province} setProvince={setProvince} />
      </Grid>
      <Grid item xs={12}></Grid>

      {/* ---------------------------Count Cards-------------------------------------- */}

      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <CountCard count={counts.totalSupplier} title={"Total suppliers"} />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <CountCard count={counts.product} title={"Products"} />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <CountCard count={counts.rawMaterial} title={"Raw materials"} />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <CountCard count={counts.joinCount} title={"Join with CEHub"} />
      </Grid>
      <Grid item xs={2.4} display={"flex"} justifyContent={"center"}>
        <CountCard count={counts.joinPercentage} title={"Join with CEHub %"} />
      </Grid>

      {/* --------------------------Charts------------------------------------------ */}
      <Grid item xs={7.2} display={"flex"} justifyContent={"center"}>
        <BarChart />
      </Grid>
      <Grid item xs={4.8} display={"flex"} justifyContent={"center"}>
        <SelectionStatusCard />
      </Grid>
    </Grid>
  );
};

export default Overview;
