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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  return (
    <Grid container minHeight={"85svh"} pr={2}>
      <Grid item xs={12}>
        <VerificationStepper currentStep={3} />

        <Grid container>
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
