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

const SupplierPreviewCard = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptions = () => {};

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
                color="action"
                sx={{ mr: 1 }}
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
                color="action"
                sx={{ mr: 1 }}
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
                color="action"
                sx={{ mr: 1 }}
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
              <MailOutlineIcon fontSize="small" color="action" sx={{ mr: 1 }} />{" "}
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
          <Button variant="contained">
            <Typography>View Profile</Typography>
          </Button>
        </Box>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={() => handleOptions()}>
            <Typography>Option 1</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleOptions()}>
            <Typography>Option 2</Typography>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default SupplierPreviewCard;
