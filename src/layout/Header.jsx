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
    navigate("/CEHUB-AdminPanel");
  };
  return (
    <Toolbar>
      <Grid container mt={1} mb={1}>
        <Grid
          item
          lg={2}
          md={2.5}
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ xs: "space-between", md: "start" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            size="small"
            sx={{ ml: { md: -3, xs: 0 } }}
          >
            {open ? (
              <ChevronLeftIcon fontSize="large" />
            ) : (
              <ChevronRightIcon fontSize="large" />
            )}
          </IconButton>
          <Typography variant="h4" textAlign={"center"}>
            {currentUrl.split("/")[1]}
          </Typography>
          <IconButton
            size="small"
            onClick={handleMenuOpen}
            sx={{ display: { md: "none", xs: "flex" } }}
          >
            <Avatar
              sx={{ width: 30, height: 30, bgcolor: "#F47621" }}
              src={UserIcon}
            />
          </IconButton>
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={{md:53}}
        >
          <Box>
            <PageSwitchButton currentUrl={currentUrl} />
          </Box>
        </Grid>
        <Grid
          item
          lg={5}
          md={4.5}
          xs={0}
          display={{ xs: "none", md: "flex" }}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Grid
            container
            width={120}
            mr={5}
            display={{ xs: "none", md: "flex" }}
          >
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

          <Box display={{ xs: "none", md: "inline" }} ml={1}>
            <Typography fontWeight={600}>{UserData?.name}</Typography>
            <Typography fontSize={12} mt={-0.5}>
              {UserData?.userType}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* -----------------Menu---------------- */}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <Box pl={2} mb={2} mt={-2}>
          <Box display={{ md: "none", xs: "inline" }} ml={1}>
            <Typography fontWeight={600}>{UserData?.name}</Typography>
            <Typography fontSize={12} mt={-0.5}>
              {UserData?.userType}
            </Typography>
          </Box>
        </Box>

        <MenuItem sx={{ display: { md: "none", xs: "block" } }}>
          <FileDownloadIcon color="action" sx={{ mr: 1 }} />
          Download
        </MenuItem>
        <MenuItem sx={{ display: { md: "none", xs: "block" } }}>
          <MailIcon color="action" sx={{ mr: 1 }} />
          Messages
        </MenuItem>
        <MenuItem sx={{ display: { md: "none", xs: "block" } }}>
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
              mr: 1,
            }}
          >
            <NotificationsIcon color="action" sx={{}} />
          </Badge>
          Notifications
        </MenuItem>
        <MenuItem onClick={gotoProfile}>
          <PersonIcon color="action" sx={{ mr: 1 }} />
          My Profile
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <LogoutIcon color="action" sx={{ mr: 1 }} />
          Log Out
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};

export default Header;
