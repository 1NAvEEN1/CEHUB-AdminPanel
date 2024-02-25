import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Avatar,
  Badge,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DefaultUserIcon from "../assets/UserIcon.png";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import PageSwitchButton from "../components/PageSwitchButton/PageSwitchButton";

const Header = ({ setOpen, open, currentUrl }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [UserIcon, setUserIcon] = useState(DefaultUserIcon);
  const UserData = {
    name: "Kasun",
    userType: "Admin Account",
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const gotoProfile = () => {
    //navigate("../profile");
    console.log("Profile");
  };

  const handleSignOut = () => {
    navigate("/");
  };
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(!open)}
        edge="start"
        size="small"
        sx={{ ml: -3 }}
      >
        {open ? (
          <ChevronLeftIcon fontSize="large" />
        ) : (
          <ChevronRightIcon fontSize="large" />
        )}
      </IconButton>
      <Grid container>
        <Grid item xs={2} display={"flex"} alignItems={"center"}>
          <Typography variant="h4" textAlign={"center"}>
            {currentUrl.split("/")[1]}
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <PageSwitchButton currentUrl={currentUrl} />
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Grid container width={120} mr={5}>
            <Grid item xs={4}>
              <IconButton size="small">
                <FileDownloadIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton size="small">
                <MailIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton size="small">
                <Badge
                  color="error"
                  variant="dot"
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: 3,
                      height: 8,
                      width: 5,
                    },
                  }}
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
          <IconButton size="small" onClick={handleMenuOpen}>
            <Avatar
              sx={{ width: 30, height: 30, bgcolor: "#F47621" }}
              src={UserIcon}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={gotoProfile}>
              <PersonIcon sx={{ mr: 1 }} />
              My Profile
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
              <LogoutIcon sx={{ mr: 1 }} />
              Log Out
            </MenuItem>
          </Menu>
          <Box display={"inline"} ml={1}>
            <Typography fontWeight={600}>{UserData?.name}</Typography>
            <Typography fontSize={12} mt={-0.5}>
              {UserData?.userType}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Header;
