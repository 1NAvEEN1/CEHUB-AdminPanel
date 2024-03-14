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
  Checkbox,
  Button,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const initialShadow = "1px 5px 8px 5px rgba(0, 0, 0, 0.05)";
const errorShadow = "-1px 1px 8px 5px rgba(255, 0, 0, 0.3)";

const OtherDetails = () => {
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  //------------------Buttons functions --------------------------------//

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleRejectButtonClick = () => {
    navigate(-1);
  };

  const handleFinishLaterButtonClick = () => {
    navigate(-1);
  };

  const handleSaveButtonClick = () => {
    navigate("./../../");
  };

  //------------------Business details --------------------------------//
  const [businessType, setBusinessType] = useState(2);
  const [registeredBusiness, setRegisteredBusiness] = useState(true);
  const [businessName, setBusinessName] = useState(
    "NC Natural Products Private Limited "
  );

  const handleRegistrationChange = (event) => {
    setRegisteredBusiness(event.target.value === "true");
    if (event.target.value === "false") {
      // setBusinessName("");
      // setBusinessType(0);
    }
  };

  //-----------------Certificate Details--------------------------------//

  const [certificates, setCertificates] = useState(true);

  const [certificatesNames, setCertificatesNames] = useState(
    "GMP, HACCP, SLS, ISO 22000"
  );
  const handleCertificateChange = (event) => {
    setCertificates(event.target.value === "true");
    if (event.target.value === "false") {
      // setBusinessName("");
      // setBusinessType(0);
    }
  };

  //-----------------Exporting Details--------------------------------//

  const [exporting, setExporting] = useState(true);

  const [exportingCountries, setExportingCountries] = useState(
    "USA, Japan, Canada, India, Dubai"
  );

  const handleExportingChange = (event) => {
    setExporting(event.target.value === "true");
    if (event.target.value === "false") {
      // setBusinessName("");
      // setBusinessType(0);
    }
  };

  //-----------------Ask for Exporting--------------------------------//

  const [askForExporting, setAskForExporting] = useState(true);
  const handleAskForExportingChange = (event) => {
    setAskForExporting(event.target.value === "true");
    if (event.target.value === "false") {
      // setBusinessName("");
      // setBusinessType(0);
    }
  };

  return (
    <Grid container minHeight={"85svh"} pr={2}>
      <Grid item xs={12}>
        <VerificationStepper currentStep={3} />
        <Typography variant="h4" mt={2}>
          Other Details
        </Typography>

        {/* -------------------------------Business Details--------------------------------- */}
        <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
          Have you registered your business?
        </Typography>
        <FormControl fullWidth sx={{ pl: 2, pr: 2, mt: 1 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={registeredBusiness.toString()}
            onChange={handleRegistrationChange}
            name="radio-buttons-group"
          >
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    Yes
                  </Typography>{" "}
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    No
                  </Typography>
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        {registeredBusiness && (
          <>
            <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
              If Yes, what is the type of your business?
            </Typography>
            <Grid container spacing={3} mt={-2}>
              <Grid
                item
                xs={12}
                xl={4}
                lg={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box
                  sx={{
                    boxShadow: initialShadow,
                    borderRadius: 2,
                    p: 2,
                    pt: 1,
                    width: "100%",
                  }}
                >
                  <Typography variant="b1" fontWeight={600} color="primary">
                    Registration Type
                  </Typography>

                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mt={1}
                  >
                    <Select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      fullWidth
                      size="small"
                    >
                      <MenuItem value={0}>Solo Proprietor</MenuItem>
                      <MenuItem value={1}>Partnership</MenuItem>
                      <MenuItem value={2}>Private Limited Company</MenuItem>
                    </Select>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} xl={7} height={"100%"}>
                <Box
                  sx={{
                    boxShadow: initialShadow,
                    borderRadius: 2,
                    p: 2,
                    pt: 1,
                  }}
                >
                  <Typography variant="b1" fontWeight={600} color="primary">
                    Business Name
                  </Typography>
                  <TextField
                    fullWidth
                    InputProps={{ sx: { borderRadius: 1, mt: 1 } }}
                    placeholder="ABC Private Limited"
                    multiline
                    size="small"
                    value={businessName}
                    rows={1}
                    maxRows={4}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                    }}
                  ></TextField>
                </Box>
              </Grid>
            </Grid>
          </>
        )}

        {/* ------------------------Certificates Details-------------------------------- */}
        <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
          Do you have any quality certificates?
        </Typography>
        <FormControl fullWidth sx={{ pl: 2, pr: 2, mt: 1 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={certificates.toString()}
            onChange={handleCertificateChange}
            name="radio-buttons-group"
          >
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    Yes
                  </Typography>{" "}
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    No
                  </Typography>
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        {certificates && (
          <>
            <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
              If yes, please note them here
            </Typography>
            <Box
              sx={{
                boxShadow: initialShadow,
                borderRadius: 2,
                p: 2,
                pt: 1,
                mt: 1,
                maxWidth: 1000,
              }}
            >
              <Typography variant="b1" fontWeight={600} color="primary">
                Quality certificates
              </Typography>
              <TextField
                fullWidth
                InputProps={{ sx: { borderRadius: 1, mt: 1 } }}
                placeholder="GMP | HAPPC | SLS | HALAL"
                multiline
                size="small"
                value={certificatesNames}
                rows={1}
                maxRows={4}
                onChange={(e) => {
                  setCertificatesNames(e.target.value);
                }}
              ></TextField>
            </Box>
          </>
        )}

        {/* ------------------------Exporting Details-------------------------------- */}
        <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
          Are you presently exporting your product?
        </Typography>
        <FormControl fullWidth sx={{ pl: 2, pr: 2, mt: 1 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={exporting.toString()}
            onChange={handleExportingChange}
            name="radio-buttons-group"
          >
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    Yes
                  </Typography>{" "}
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    No
                  </Typography>
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        {exporting && (
          <>
            <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
              If yes, please note them here
            </Typography>
            <Box
              sx={{
                boxShadow: initialShadow,
                borderRadius: 2,
                p: 2,
                pt: 1,
                mt: 1,
                maxWidth: 1000,
              }}
            >
              <Typography variant="b1" fontWeight={600} color="primary">
                Quality certificates
              </Typography>
              <TextField
                fullWidth
                InputProps={{ sx: { borderRadius: 1, mt: 1 } }}
                placeholder="USA, UK ,Canada, Japan , India"
                multiline
                size="small"
                value={exportingCountries}
                rows={1}
                maxRows={4}
                onChange={(e) => {
                  setExportingCountries(e.target.value);
                }}
              ></TextField>
            </Box>
          </>
        )}

        {/* ------------------------Ask for Exporting-------------------------------- */}
        <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
          Would you be open to supplying your product for us to handle the
          export process?
        </Typography>
        <FormControl fullWidth sx={{ pl: 2, pr: 2, mt: 1 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={askForExporting.toString()}
            onChange={handleAskForExportingChange}
            name="radio-buttons-group"
          >
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    Yes
                  </Typography>{" "}
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={18}>
                    No
                  </Typography>
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        <Grid container mt={2}>
          <Grid item xs={12} display={"flex"} alignItems={"center"}>
            <Checkbox
              checked={verified}
              onChange={(e) => setVerified(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Other details are verified</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} display={"flex"} alignItems={"end"}>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleBackButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Back
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={0}
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
            lg={2.4}
          ></Grid>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleRejectButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Reject
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleFinishLaterButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Finish later
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSaveButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Save & Submit
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OtherDetails;
