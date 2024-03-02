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
import PieChartCard from "../../components/DashboardComponents/PieChartCard";
import ListCard from "../../components/DashboardComponents/ListCard";

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
  // ------------------BarChart values-------------------------//
  const [barChartData, setBarChartData] = useState();
  //---------------------Selection status------------------------//
  const [selectionStatusData, setSelectionStatusData] = useState([
    {
      status: "Qualified",
      percentage: 20,
      count: 350,
    },
    {
      status: "Processing",
      percentage: 70,
      count: 1225,
    },
    {
      status: "Reject",
      percentage: 10,
      count: 175,
    },
  ]);

  // ------------------PieChart values-------------------------//

  const [RegBusinessPieData, setRegBusinessPieData] = useState({
    title: "Registered businesses",
    count: 580,
    percentages: [
      { id: 0, value: 40, name: "Registered", color: "#F47621" },
      { id: 1, value: 60, name: "Unregistered", color: "#F4762133" },
    ],
  });
  const [PvtPieData, setPvtPieData] = useState({
    title: "Private Limited Companies",
    count: 495,
    percentages: [
      { id: 0, value: 70, name: "Company", color: "#F47621" },
      { id: 1, value: 10, name: "Partnerships", color: "#F4762180" },
      { id: 2, value: 20, name: "Solo", color: "#F4762133" },
    ],
  });
  const [QCPieData, setQCPieData] = useState({
    title: "Quality certificate available",
    count: 358,
    percentages: [
      { id: 0, value: 40, name: "Available", color: "#F47621" },
      { id: 1, value: 60, name: "Not Available", color: "#F4762133" },
    ],
  });

  //--------------------List cards counts--------------------//

  const [ProvinceListCounts, setProvinceListCounts] = useState([
    {
      name: "Western",
      count: 175,
    },
    {
      name: "Central",
      count: 125,
    },
    {
      name: "Southern",
      count: 115,
    },
    {
      name: "North Western",
      count: 95,
    },
    {
      name: "Sabaragamuwa",
      count: 91,
    },
    {
      name: "Eastern",
      count: 87,
    },
    {
      name: "Uva",
      count: 65,
    },
    {
      name: "North Central",
      count: 54,
    },
    {
      name: "Northern",
      count: 23,
    },
  ]);

  const [FoodListCounts, setFoodListCounts] = useState([
    {
      name: "Dehydrated foods",
      count: 175,
    },
    {
      name: "Processed vegetables, fruits",
      count: 125,
    },
    {
      name: "Fruit juice",
      count: 115,
    },
    {
      name: "Spices",
      count: 95,
    },
    {
      name: "Herbal products",
      count: 91,
    },
    {
      name: "Food, Feed & Beverage",
      count: 87,
    },
    {
      name: "Electrical and Electronics",
      count: 65,
    },
    {
      name: "Garments and Textiles",
      count: 54,
    },
    {
      name: "Gems and Jewellery",
      count: 23,
    },
    {
      name: "Other",
      count: 10,
    },
  ]);

  const [CategoryListCounts, setCategoryListCounts] = useState([
    {
      name: "Tea",
      count: 175,
    },
    {
      name: "Rubber",
      count: 125,
    },
    {
      name: "Coconut",
      count: 115,
    },
    {
      name: "Spices",
      count: 95,
    },
    {
      name: "Herbal products",
      count: 91,
    },
    {
      name: "Food, Feed & Beverage",
      count: 87,
    },
    {
      name: "Electrical and Electronics",
      count: 65,
    },
    {
      name: "Garments and Textiles",
      count: 54,
    },
    {
      name: "Gems and Jewellery",
      count: 23,
    },
    {
      name: "Other",
      count: 10,
    },
  ]);

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
      <Grid item xs={12}></Grid>

      {/* --------------------------Bar Charts------------------------------------------ */}
      <Grid item xs={7.2} display={"flex"} justifyContent={"center"}>
        <BarChart data={barChartData} />
      </Grid>
      <Grid item xs={4.8} display={"flex"} justifyContent={"center"}>
        <SelectionStatusCard data={selectionStatusData} />
      </Grid>

      {/* --------------------------Pie Charts------------------------------------------ */}
      <Grid item xs={4} display={"flex"} justifyContent={"center"}>
        <PieChartCard data={RegBusinessPieData} />
      </Grid>
      <Grid item xs={4} display={"flex"} justifyContent={"center"}>
        <PieChartCard data={PvtPieData} />
      </Grid>
      <Grid item xs={4} display={"flex"} justifyContent={"center"}>
        <PieChartCard data={QCPieData} />
      </Grid>

      {/* --------------------------List count Cards------------------------------------*/}
      <Grid item xs={4}>
        <ListCard data={ProvinceListCounts} title={"Province"} />
      </Grid>
      <Grid item xs={4}>
        <ListCard data={CategoryListCounts} title={"Product Categories"} />
      </Grid>
      <Grid item xs={4}>
        <ListCard data={ProvinceListCounts} title={"Food, Feed & Beverage"} />
      </Grid>
    </Grid>
  );
};

export default Overview;
