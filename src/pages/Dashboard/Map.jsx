import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import DateFilter from "../../components/FilterComponents/DateFilter";
import { CategoryFilter } from "../../components/FilterComponents/CategoryFilter";
import { SubCategoryFilter } from "../../components/FilterComponents/SubCategoryFilter";
import { StatusFilter } from "../../components/FilterComponents/StatusFilter";
import { ProvinceFilter } from "../../components/FilterComponents/ProvinceFilter";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const today = dayjs().format("YYYY-MM-DD");
  // ------------------Filter values-------------------------//
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [province, setProvince] = useState("All");

  const defaultProps = {
    center: {
      lat: 7.8774222,
      lng: 80.7003428,
    },
    zoom: 9,
  };
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

      <Grid item xs={12}>
        <Box height={"90svh"} width={"100%"}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Map;
