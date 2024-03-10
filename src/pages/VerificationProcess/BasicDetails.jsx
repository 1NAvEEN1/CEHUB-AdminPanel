import React, { useState, useEffect } from "react";
import VerificationStepper from "../../components/VerificationStepper/VerificationStepper";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  GetCities,
  GetDistricts,
  GetProvinces,
} from "../../services/LocationService";

const initialShadow = "1px 5px 8px 5px rgba(0, 0, 0, 0.05)";
const errorShadow = "-1px 1px 8px 5px rgba(255, 0, 0, 0.3)";

const BasicDetails = () => {
  const [language, setLanguage] = useState("en");
  const [province, setProvince] = useState(1);
  const [district, setDistrict] = useState(7);
  const [city, setCity] = useState(1949);
  const [name, setName] = useState();
  const [contactNumber1, setContactNumber1] = useState();
  const [contactNumber2, setContactNumber2] = useState();
  const [email, setEmail] = useState();
  const [Address, setAddress] = useState();
  const [googleMapURL, setGoogleMapURL] = useState();
  const [verified, setVerified] = useState();

  const [provinces, setProvinces] = useState([]);
  const [provincesLoading, setProvincesLoading] = useState(true); // Add loading state

  const getProvinces = async () => {
    try {
      const response = await GetProvinces();
      setProvinces(response.data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    } finally {
      setProvincesLoading(false); // Set loading to false when done fetching
    }
  };

  useEffect(() => {
    getProvinces();
  }, []);

  const [districts, setDistricts] = useState([]);
  const [districtsLoading, setDistrictsLoading] = useState(false); // Add loading state

  const getDistricts = async () => {
    setDistrictsLoading(true); // Set loading to true before fetching
    try {
      const response = await GetDistricts(province);
      setDistricts(response.data);
    } catch (error) {
      console.error("Error fetching districts:", error);
    } finally {
      setDistrictsLoading(false); // Set loading to false when done fetching
    }
  };

  useEffect(() => {
    if (!province == 0) {
      getDistricts();
    }
  }, [province]);

  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false); // Add loading state

  const getCities = async () => {
    setCitiesLoading(true); // Set loading to true before fetching
    try {
      const response = await GetCities(district);
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching Cities:", error);
    } finally {
      setCitiesLoading(false); // Set loading to false when done fetching
    }
  };

  useEffect(() => {
    if (!district == 0) {
      getCities();
    }
  }, [district]);

  return (
    <Box pr={2}>
      <VerificationStepper currentStep={1} />
      <Typography variant="h4" mt={2}>
        Basic Details
      </Typography>

      <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
        Please select language
      </Typography>
      <FormControl fullWidth sx={{ pl: 2, pr: 2, mt: 1 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={language}
          name="radio-buttons-group"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <Grid container spacing={15}>
            <Grid item xs={4}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                maxWidth={450}
              >
                <Typography fontWeight={600} fontSize={18}>
                  English
                </Typography>
                <FormControlLabel
                  value="en"
                  control={<Radio />}
                  labelPlacement="start"
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                maxWidth={450}
              >
                <Typography fontWeight={600} fontSize={18}>
                  Sinhala
                </Typography>
                <FormControlLabel
                  value="si"
                  control={<Radio />}
                  labelPlacement="start"
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                maxWidth={450}
              >
                <Typography fontWeight={600} fontSize={18}>
                  Tamil
                </Typography>
                <FormControlLabel
                  value="ta"
                  control={<Radio />}
                  labelPlacement="start"
                />
              </Box>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>

      <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={4}>
        Contact details
      </Typography>

      <Grid container spacing={3} mt={-1}>
        <Grid item xs={4}>
          <Box
            sx={{
              // boxShadow: error === "province" ? errorShadow : initialShadow,
              boxShadow: initialShadow,
              borderRadius: 3,
              pt: 1,
              pr: 2,
              pb: 1,
            }}
          >
            <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
              Province
            </Typography>
            <FormControl fullWidth>
              <Autocomplete
                size="small"
                value={
                  provinces.find((option) => option.id === province) || null
                }
                options={provinces}
                getOptionLabel={(option) => option.provinceEnglish}
                onChange={(_, newValue) => {
                  setCities([]);
                  setDistricts([]);
                  setProvince(newValue ? newValue.id : 0);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={
                      provinces.length == 0 && province != 0
                        ? "Loading..."
                        : "Select a province"
                    }
                    sx={{
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 40,
                      ml: 1,
                      mr: -1,
                    }}
                  />
                )}
                isOptionEqualToValue={(option, value) => option.id === value.id} // Add this to fix the issue
                loading={provincesLoading} // Use the loading prop
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              // boxShadow: error === "province" ? errorShadow : initialShadow,
              boxShadow: initialShadow,
              borderRadius: 3,
              pt: 1,
              pr: 2,
              pb: 1,
            }}
          >
            <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
              District
            </Typography>
            <FormControl fullWidth>
              <Autocomplete
                size="small"
                value={
                  districts.find((option) => option.id === district) || null
                }
                options={districts}
                getOptionLabel={(option) => option.districtEnglish}
                onChange={(_, newValue) => {
                  setCities([]);
                  setDistrict(newValue ? newValue.id : 0);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={
                      districts.length == 0 && district != 0
                        ? "Loading..."
                        : "Select a district"
                    }
                    sx={{
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 40,
                      ml: 1,
                      mr: -1,
                    }}
                  />
                )}
                isOptionEqualToValue={(option, value) => option.id === value.id} // Add this to fix the issue
                loading={provincesLoading} // Use the loading prop
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              // boxShadow: error === "province" ? errorShadow : initialShadow,
              boxShadow: initialShadow,
              borderRadius: 3,
              pt: 1,
              pr: 2,
              pb: 1,
            }}
          >
            <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
              City
            </Typography>
            <FormControl fullWidth>
              <Autocomplete
                size="small"
                value={cities.find((option) => option.id === city) || null}
                options={cities}
                getOptionLabel={(option) => option.cityEnglish}
                onChange={(_, newValue) => {
                  // handleChange("province", newValue ? newValue.id : "0");
                  setCity(newValue ? newValue.id : 0);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={
                      cities.length == 0 && city != 0
                        ? "Loading..."
                        : "Select a city"
                    }
                    sx={{
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 40,
                      ml: 1,
                      mr: -1,
                    }}
                  />
                )}
                isOptionEqualToValue={(option, value) => option.id === value.id} // Add this to fix the issue
                loading={provincesLoading} // Use the loading prop
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicDetails;
