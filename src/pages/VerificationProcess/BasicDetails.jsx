import React from "react";
import VerificationStepper from "../../components/VerificationStepper/VerificationStepper";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const BasicDetails = () => {
  return (
    <Box pr={2}>
      <VerificationStepper currentStep={1} />
      <Typography variant="h4">Basic Details</Typography>
    </Box>
  );
};

export default BasicDetails;
