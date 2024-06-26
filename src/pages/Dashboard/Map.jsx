import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
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
import { GetCities } from "../../services/LocationService";

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

  const [locations, setLocations] = useState([
    {
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
    },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false); // Add loading state

  const getCities = async () => {
    setCitiesLoading(true); // Set loading to true before fetching
    try {
      const response = await GetCities(2);
      console.log(response.data);
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching Cities:", error);
    } finally {
      setCitiesLoading(false); // Set loading to false when done fetching
    }
  };

  useEffect(() => {
    getCities();
  }, []);

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
              {cities.map((location, index) => (
                  <Marker
                    key={index}
                    position={{
                      lat: parseFloat(location.latitude),
                      lng: parseFloat(location.longitude),
                    }}
                    onClick={() => setSelectedLocation(location)}
                  />
              ))}
              {selectedLocation && (
                <InfoWindow
                  position={{
                    lat: parseFloat(selectedLocation.latitude),
                    lng: parseFloat(selectedLocation.longitude),
                  }}
                  onCloseClick={() => setSelectedLocation(null)}
                >
                  <div>
                    <h3>Naveen</h3>
                    <p>Phone: 0769114074</p>
                    <p>Category: Tea</p>
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
