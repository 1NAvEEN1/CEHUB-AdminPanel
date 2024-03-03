import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import DateFilter from "../../components/FilterComponents/DateFilter";
import { CategoryFilter } from "../../components/FilterComponents/CategoryFilter";
import { SubCategoryFilter } from "../../components/FilterComponents/SubCategoryFilter";
import { StatusFilter } from "../../components/FilterComponents/StatusFilter";
import { ProvinceFilter } from "../../components/FilterComponents/ProvinceFilter";
import SearchIcon from "@mui/icons-material/Search";

const Suppliers = () => {
  const today = dayjs().format("YYYY-MM-DD");
  // ------------------Filter values-------------------------//
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [province, setProvince] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const defaultProps = {
    center: {
      lat: 7.8774222,
      lng: 80.7003428,
    },
    zoom: 9,
  };
  return (
    <Grid container spacing={2} width={"100%"}>
      <Grid item xs={7.2}>
        <TextField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          size="small"
          placeholder="Search"
          InputProps={{
            style: {
              borderRadius: "20px",
              // border: "1px solid #EFF0F6",
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Grid>

      <Grid item xs={4.8}></Grid>
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
    </Grid>
  );
};

export default Suppliers;
