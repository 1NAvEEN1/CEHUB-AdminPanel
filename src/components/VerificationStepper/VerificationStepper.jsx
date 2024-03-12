import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const VerificationStepper = ({ currentStep }) => {
  const Stepper = ({ title, step }) => {
    return (
      <Grid
        container
        bgcolor={currentStep === step ? "#F4762133" : "white"}
        borderRadius={1}
        height={64}
      >
        <Grid
          item
          xs={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: currentStep > step ? "#2FB60D" : "white",
              borderRadius: "50%",
              border:
                currentStep === step
                  ? "1px solid #F47621"
                  : currentStep > step
                  ? "1px solid #2FB60D"
                  : "1px solid #B2C0D1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontSize={32}
              fontWeight={500}
              color={currentStep === step ? "#F47621" : "#B2C0D1"}
              display={currentStep > step ? "none" : "block"}
            >
              {step}
            </Typography>
            <Typography
              color="white"
              display={currentStep > step ? "block" : "none"}
              pt={0.5}
            >
              <CheckIcon fontSize="large" />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={9} display={"flex"} alignItems={"center"}>
          <Box color={currentStep === step ? "#F47621" : "#B2C0D1"}>
            <Typography fontWeight={500}>{"Step " + step}</Typography>
            <Typography fontWeight={700}>{title}</Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stepper title={"Basic Details"} step={1} />
        </Grid>
        <Grid item xs={4}>
          <Stepper title={"Product Details"} step={2} />
        </Grid>
        <Grid item xs={4}>
          <Stepper title={"Other Details"} step={3} />
        </Grid>
      </Grid>
    </div>
  );
};

export default VerificationStepper;
