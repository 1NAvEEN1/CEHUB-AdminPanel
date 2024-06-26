import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import DateFilter from "../../components/FilterComponents/DateFilter";
import { CategoryFilter } from "../../components/FilterComponents/CategoryFilter";
import { SubCategoryFilter } from "../../components/FilterComponents/SubCategoryFilter";
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

  const [FoodListCounts, setFoodListCounts] = useState([
    {
      name: "Dehydrated foods",
      count: 50,
    },
    {
      name: "Processed vegetables, fruits",
      count: 20,
    },
    {
      name: "Fruit juice",
      count: 10,
    },
    {
      name: "Processed foods",
      count: 5,
    },
    {
      name: "Cereals",
      count: 2,
    },
    {
      name: "Other",
      count: 1,
    },
  ]);
  const [CoconutListCounts, setCoconutListCounts] = useState([
    {
      name: "Coconut water",
      count: 50,
    },
    {
      name: "King coconut water",
      count: 20,
    },
    {
      name: "Coconut oil",
      count: 10,
    },
    {
      name: "Coconut milk ",
      count: 5,
    },
    {
      name: "Coconut Butter",
      count: 2,
    },
    {
      name: "Coconut cream",
      count: 2,
    },
    {
      name: "Coconut flour",
      count: 2,
    },
    {
      name: "Coconut Jam",
      count: 1,
    },
    {
      name: "Coconut Chips",
      count: 1,
    },
    {
      name: "Other",
      count: 1,
    },
  ]);

  return (
    <Grid container spacing={2} width={"100%"}>
      {/* --------------------------Filter Options---------------------------------- */}

      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <DateFilter date={date} setDate={setDate} today={today} />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <CategoryFilter category={category} setCategory={setCategory} />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
      >
        <SubCategoryFilter
          subCategory={subCategory}
          setSubCategory={setSubCategory}
        />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <StatusFilter status={status} setStatus={setStatus} />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <ProvinceFilter province={province} setProvince={setProvince} />
      </Grid>
      <Grid item xs={12}></Grid>

      {/* ---------------------------Count Cards-------------------------------------- */}

      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <CountCard count={counts.totalSupplier} title={"Total suppliers"} />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <CountCard count={counts.product} title={"Products"} />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <CountCard count={counts.rawMaterial} title={"Raw materials"} />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <CountCard count={counts.joinCount} title={"Join with CEHub"} />
      </Grid>
      <Grid
        item
        lg={2.4}
        md={4}
        xs={6}
        display={"flex"}
        justifyContent={"center"}
      >
        <CountCard count={counts.joinPercentage} title={"Join with CEHub %"} />
      </Grid>
      <Grid item xs={12}></Grid>

      {/* --------------------------Bar Charts------------------------------------------ */}
      <Grid
        item
        lg={7.2}
        md={8}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
      >
        <BarChart data={barChartData} />
      </Grid>
      <Grid
        item
        lg={4.8}
        md={4}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
      >
        <SelectionStatusCard data={selectionStatusData} />
      </Grid>

      {/* --------------------------Pie Charts------------------------------------------ */}
      <Grid item md={4} xs={12} display={"flex"} justifyContent={"center"}>
        <PieChartCard data={RegBusinessPieData} />
      </Grid>
      <Grid item md={4} xs={12} display={"flex"} justifyContent={"center"}>
        <PieChartCard data={PvtPieData} />
      </Grid>
      <Grid item md={4} xs={12} display={"flex"} justifyContent={"center"}>
        <PieChartCard data={QCPieData} />
      </Grid>

      {/* --------------------------List count Cards------------------------------------*/}
      <Grid item lg={4} md={6} xs={12}>
        <ListCard data={ProvinceListCounts} title={"Province"} />
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <ListCard data={CategoryListCounts} title={"Product Categories"} />
      </Grid>
      <Grid item lg={4} xs={12}>
        <Grid container spacing={2}>
          <Grid item lg={12} md={6} xs={12}>
            <ListCard data={FoodListCounts} title={"Food, Feed & Beverage"} />
          </Grid>
          <Grid item lg={12} md={6} xs={12}>
            <ListCard data={CoconutListCounts} title={"Coconut"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Overview;
