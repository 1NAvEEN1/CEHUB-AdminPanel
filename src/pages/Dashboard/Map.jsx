import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import DateFilter from "../../components/FilterComponents/DateFilter";
import { CategoryFilter } from "../../components/FilterComponents/CategoryFilter";
import { SubCategoryFilter } from "../../components/FilterComponents/SubCategoryFilter";
import { StatusFilter } from "../../components/FilterComponents/StatusFilter";
import { ProvinceFilter } from "../../components/FilterComponents/ProvinceFilter";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const Map = () => {
  const today = dayjs().format("YYYY-MM-DD");
  // ------------------Filter values-------------------------//
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [province, setProvince] = useState("All");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAaR7EXzdD_ECrIwHSQGT2fIidx8-26m2M",
    libraries,
  });

  const [locations, setLocations] = useState(
    [{
      lat: 7.2905715,
      lng: 80.6337262,
      id: "1",
      number: "0769114074",
      name: "Naveen Jayathilaka",
    },
    {
      lat: 7.2905715,
      lng: 81.6337262,
      id: "2",
      number: "0769114074",
      name: "Naveen Jayathilaka",
    },
    {
      lat: 8.2905715,
      lng: 80.6337262,
      id: "3",
      number: "0769114074",
      name: "Naveen Jayathilaka",
    },
    {
      lat: 6.2905715,
      lng: 80.1337262,
      id: "4",
      number: "0769114074",
      name: "Naveen Jayathilaka",
    },
    {
      lat: 6.6905715,
      lng: 80.1337262,
      id: "5",
      number: "0769114074",
      name: "Naveen Jayathilaka",
    },]
  );

  const [selectedLocation, setSelectedLocation] = useState(null);

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

      {/* --------------Map---------- */}

      <Grid item xs={12}>
        <Box height={"80svh"} width={"100%"}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={{ lat: location.lat, lng: location.lng }}
                  onClick={() => setSelectedLocation(location)}
                />
              ))}

              {selectedLocation && (
                <InfoWindow
                  position={{
                    lat: selectedLocation.lat,
                    lng: selectedLocation.lng,
                  }}
                  onCloseClick={() => setSelectedLocation(null)}
                >
                  <div>
                    <h3>{selectedLocation.name}</h3>
                    <p>Phone: {selectedLocation.number}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          ) : (
            <></>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Map;
