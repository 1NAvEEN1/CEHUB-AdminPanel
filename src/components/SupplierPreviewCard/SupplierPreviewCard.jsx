import {
  Box,
  Grid,
  Typography,
  MenuItem,
  Menu,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";

const SupplierPreviewCard = ({ data, page }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptions = (action) => {
    if (action === "View Profile") {
      navigate(`/ViewProfile/${234}`);
    }
  };

  const handleButtonClick = (action) => {
    if (page === "Process") {
      navigate("./Verify/BasicDetails");
    } else if (action === "View Profile") {
      navigate(`/ViewProfile/${234}`);
    }
  };

  return (
    <Grid container border={"1px solid #EFF0F6"} borderRadius={3} p={2.5}>
      <Grid item xs={4} mt={-0.5} di>
        <Box>
          <Typography variant="h5">{data.businessName}</Typography>
          <Typography fontSize={15} fontWeight={500} color={"#4D4D4D"}>
            {data.products[0].productCategoryId}
          </Typography>
          <Typography color={"primary.main"} fontWeight={500}>
            {data.products[0].productSubCategoryId}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Grid
          container
          spacing={1}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              color={"#4D4D4D"}
              fontWeight={500}
              fontSize={13}
            >
              <AccountCircleOutlinedIcon
                fontSize="small"
                sx={{ mr: 1, color: "#4D4D4D" }}
              />
              {data.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              color={"#4D4D4D"}
              fontWeight={500}
              fontSize={13}
            >
              <LocalPhoneOutlinedIcon
                fontSize="small"
                sx={{ mr: 1, color: "#4D4D4D" }}
              />
              {data.contactNumber1 + " | " + data.contactNumber2}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              color={"#4D4D4D"}
              fontWeight={500}
              fontSize={13}
            >
              <AlternateEmailIcon
                fontSize="small"
                sx={{ mr: 1, color: "#4D4D4D" }}
              />{" "}
              {data.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              color={"#4D4D4D"}
              fontWeight={500}
              fontSize={13}
            >
              <MailOutlineIcon
                sx={{ mr: 1, color: "#4D4D4D" }}
                fontSize="small"
              />
              {data.address}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
        pr={3}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Typography color={"#4D4D4D"} fontWeight={500}>
            Options
          </Typography>
          <IconButton onClick={handleClick} size="small">
            {open ? (
              <ArrowDropUpIcon fontSize="small" />
            ) : (
              <ArrowDropDownIcon fontSize="small" />
            )}
          </IconButton>
        </Box>
        <Box ml={1}>
          <Button
            variant="contained"
            onClick={() =>
              handleButtonClick(
                page === "Process" ? "Verify Profile" : "View Profile"
              )
            }
          >
            <Typography>
              {page === "Process" ? "Verify Profile" : "View Profile"}
            </Typography>
          </Button>
        </Box>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            sx={{ display: page !== "Process" ? "none" : "block" }}
            onClick={() => handleOptions("View Profile")}
          >
            <Typography>View Profile</Typography>
          </MenuItem>
          <MenuItem
            sx={{ display: page === "Process" ? "none" : "block" }}
            onClick={() => handleOptions("Verify Profile")}
          >
            <Typography>Verify Profile</Typography>
          </MenuItem>
          <MenuItem
            sx={{ display: page === "Reject" ? "none" : "block" }}
            onClick={() => handleOptions("Reject Profile")}
          >
            <Typography>Reject Profile</Typography>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default SupplierPreviewCard;
