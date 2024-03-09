import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import DateFilter from "../../components/FilterComponents/DateFilter";
import { CategoryFilter } from "../../components/FilterComponents/CategoryFilter";
import { SubCategoryFilter } from "../../components/FilterComponents/SubCategoryFilter";
import { StatusFilter } from "../../components/FilterComponents/StatusFilter";
import { ProvinceFilter } from "../../components/FilterComponents/ProvinceFilter";
import SearchIcon from "@mui/icons-material/Search";
import SortingSelect from "../../components/SortingSelect/SortingSelect";
import SupplierPreviewCard from "../../components/SupplierPreviewCard/SupplierPreviewCard";

const Suppliers = () => {
  const today = dayjs().format("YYYY-MM-DD");
  // ------------------Filter values-------------------------//
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [province, setProvince] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [sorting, setSorting] = useState({
    type: "Company name",
    order: "asc",
  });

  const [data, setData] = useState([
    {
      address: "No: 75, 1st Cross street, Negombo road, Ja-ela",
      name: "Danushka Gamage",
      contactNumber1: "+94 777 123456",
      contactNumber2: "+94 112 654789",
      email: "nceco@gmail.com",
      businessName: "NC Eco Foods (Pvt) Ltd",
      products: [
        {
          productCategoryId: "Food, Feed & Beverage",
          productSubCategoryId: "Dehydrated foods",
        },
      ],
    },
    {
      address: "No: 75, 1st Cross street, Negombo road, Ja-ela",
      name: "Danushka Gamage",
      contactNumber1: "+94 777 123456",
      contactNumber2: "+94 112 654789",
      email: "nceco@gmail.com",
      businessName: "NC Eco Foods (Pvt) Ltd",
      products: [
        {
          productCategoryId: "Food, Feed & Beverage",
          productSubCategoryId: "Dehydrated foods",
        },
      ],
    },
    {
      address: "No: 75, 1st Cross street, Negombo road, Ja-ela",
      name: "Danushka Gamage",
      contactNumber1: "+94 777 123456",
      contactNumber2: "+94 112 654789",
      email: "nceco@gmail.com",
      businessName: "NC Eco Foods (Pvt) Ltd",
      products: [
        {
          productCategoryId: "Food, Feed & Beverage",
          productSubCategoryId: "Dehydrated foods",
        },
      ],
    },
    {
      address: "No: 75, 1st Cross street, Negombo road, Ja-ela",
      name: "Danushka Gamage",
      contactNumber1: "+94 777 123456",
      contactNumber2: "+94 112 654789",
      email: "nceco@gmail.com",
      businessName: "NC Eco Foods (Pvt) Ltd",
      products: [
        {
          productCategoryId: "Food, Feed & Beverage",
          productSubCategoryId: "Dehydrated foods",
        },
      ],
    },
    {
      address: "No: 75, 1st Cross street, Negombo road, Ja-ela",
      name: "Danushka Gamage",
      contactNumber1: "+94 777 123456",
      contactNumber2: "+94 112 654789",
      email: "nceco@gmail.com",
      businessName: "NC Eco Foods (Pvt) Ltd",
      products: [
        {
          productCategoryId: "Food, Feed & Beverage",
          productSubCategoryId: "Dehydrated foods",
        },
      ],
    },
    {
      address: "No: 75, 1st Cross street, Negombo road, Ja-ela",
      name: "Danushka Gamage",
      contactNumber1: "+94 777 123456",
      contactNumber2: "+94 112 654789",
      email: "nceco@gmail.com",
      businessName: "NC Eco Foods (Pvt) Ltd",
      products: [
        {
          productCategoryId: "Food, Feed & Beverage",
          productSubCategoryId: "Dehydrated foods",
        },
      ],
    },
  ]);

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

      <Grid
        item
        xs={4.8}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <SortingSelect sorting={sorting} setSorting={setSorting} />
      </Grid>
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

      {data.map((item, key) => {
        return (
          <Grid item key={key} xs={12}>
            <SupplierPreviewCard data={item} page={"Suppliers"} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Suppliers;
