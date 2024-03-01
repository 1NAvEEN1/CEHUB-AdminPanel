import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { useLocation, useNavigate } from "react-router-dom";

import Navigation from "./Navigation";
import Header from "./Header";
import { Divider } from "@mui/material";

const drawerWidth = 230;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Layout() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [currentUrl, setCurrentUrl] = useState("");

  const handleItemClick = (itemPath) => {
    setSelectedPage(itemPath);
    navigate(`.${itemPath}`);
  };

  useEffect(() => {
    const Url = location.pathname;
    console.log("currentURL", Url);
    setCurrentUrl(Url);
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "transparent",
          color: "black",
          // zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 0,
          pr: 2,
        }}
      >
        <Header setOpen={setOpen} open={open} currentUrl={currentUrl} />
        <Divider />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "transparent",
            border: "none",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box height={"100%"} pr={1}>
          <Navigation currentUrl={currentUrl} />
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box ml={-2}>
          <Outlet />
        </Box>
      </Main>
    </Box>
  );
}

export default Layout;
