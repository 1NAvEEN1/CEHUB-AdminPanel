import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import palette from "../theme/palette";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Logo from "../assets/NavigationLogo.png";

const HoverBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  width: 70,
  height: 3,
  left: 0,
}));

const MenuItemsList = [
  {
    name: "Overview",
    path: "Dashboard/Overview",
    access: "admin",
    icon: <QueryStatsIcon fontSize="large" />,
  },
  {
    name: "Suppliers",
    path: "Suppliers",
    access: "admin",
    icon: <QueryStatsIcon fontSize="large" />,
  },
  {
    name: "Verification",
    path: "Verification",
    access: "admin",
    icon: <QueryStatsIcon fontSize="large" />,
  },
  {
    name: "Settings",
    path: "Settings",
    access: "admin",
    icon: <QueryStatsIcon fontSize="large" />,
  },
];

const Navigation = () => {
  const navigate = useNavigate();

  const [selectedMenuItem, setSelectedMenuItem] = useState(
    MenuItemsList[0].name
  );

  const handleItemClick = (itemPath, itemName) => {
    setSelectedMenuItem(itemName);
    navigate(`./${itemPath}`);
  };

  const MenuItem = ({ data }) => {
    return (
      <Grid container onClick={() => handleItemClick(data.path, data.name)}
      sx={{
        cursor:"pointer"
        // ":hover":{
        //   cursor
        // }
      }}>
        <Grid
          item
          xs={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {data.icon}
        </Grid>
        <Grid
          item
          xs={9}
          display={"flex"}
          alignItems={"center"}
        >
          <Typography variant="body1">{data.name}</Typography>
          {selectedMenuItem == data.name && <HoverBox />}
        </Grid>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        mt: 2,
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Box component="img" alt="Image" src={Logo} />
        </Grid>
        {MenuItemsList.map((item, key) => (
          <Grid item xs={12} key={key}>
            <MenuItem data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Navigation;
