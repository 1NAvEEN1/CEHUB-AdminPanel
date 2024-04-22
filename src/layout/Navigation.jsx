import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";
import Logo from "../assets/NavigationLogo.png";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

const MenuItemsList = [
  {
    name: "Overview",
    path: "Dashboard/Overview",
    access: "admin",
    icon: <LeaderboardIcon />,
  },
  {
    name: "Suppliers",
    path: "Suppliers",
    access: "admin",
    icon: <WidgetsIcon />,
  },
  {
    name: "Verification",
    path: "Verification/Process",
    access: "admin",
    icon: <AssignmentTurnedInOutlinedIcon />,
  },
  {
    name: "Settings",
    path: "Settings",
    access: "admin",
    icon: <SettingsIcon />,
  },
];

const Navigation = ({ currentUrl, handleDrawerClose }) => {
  const navigate = useNavigate();

  const [selectedMenuItem, setSelectedMenuItem] = useState(
    MenuItemsList[0].path
  );

  const handleItemClick = (itemPath) => {
    setSelectedMenuItem(itemPath);
    navigate(`./${itemPath}`);
  };

  useEffect(() => {
    const pathSegments = currentUrl.split("/");
    const firstPath = pathSegments[1];
    setSelectedMenuItem(firstPath);
  }, [currentUrl]);

  const MenuItem = ({ data }) => {
    let firstPath = data.path.split("/")[0];
    return (
      <Grid
        container
        onClick={() => handleItemClick(data.path)}
        sx={{
          cursor: "pointer",
          // ":hover":{
          //   cursor
          // }
          borderRadius: 1,
          bgcolor:
            selectedMenuItem == firstPath
              ? "rgba(244, 118, 33, 0.1)"
              : "inherit",
          maxWidth: 170,
          p: 1,
        }}
      >
        <Grid
          item
          xs={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {React.cloneElement(data.icon, {
            color: selectedMenuItem == firstPath ? "primary" : "inherit",
          })}
        </Grid>
        <Grid item xs={9} display={"flex"} alignItems={"center"}>
          <Typography
            variant="body1"
            color={selectedMenuItem == firstPath ? "#F47621" : "inherit"}
            pl={1}
          >
            {data.name}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        mt: 3,
        height: "100%",
        bgcolor: "white",
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          mb={3}
          mt={1}
        >
          <Box component="img" alt="Image" src={Logo} />
        </Grid>
        {MenuItemsList.map((item, key) => (
          <Grid
            item
            xs={12}
            key={key}
            display={"flex"}
            justifyContent={"center"}
          >
            <MenuItem data={item} />
          </Grid>
        ))}
      </Grid>
      <Box
        display={{ xs: "flex", lg: "none" }}
        justifyContent={"center"}
        mt={15}
      >
        <IconButton
          sx={{ boxShadow: 2, bgcolor: "#E8E8E8" }}
          onClick={handleDrawerClose}
          size="small"
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navigation;
