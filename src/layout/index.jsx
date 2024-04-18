import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import useResponsive from "../hooks/useResponsive";
import Navigation from "./Navigation";
import Header from "./Header";
import { Divider } from "@mui/material";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: useResponsive("up", "lg") ? `-${drawerWidth}px` : 0,
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
    width: useResponsive("up", "lg") ? `calc(100% - ${drawerWidth}px)` : "100%",
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
  const [open, setOpen] = useState(useResponsive("up", "lg"));

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
          backgroundColor: "white",
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
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0,0,0,0.4)",
            },
          },
        }}
        sx={{
          width: drawerWidth,
          // flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "transparent",
            border: "none",
            borderRadius: 2,
            boxShadow: 3,
          },
        }}
        variant={useResponsive("up", "lg") ? "persistent" : "temporary"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box height={"100%"}>
          <Navigation
            currentUrl={currentUrl}
            handleDrawerClose={handleDrawerClose}
          />
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box ml={-2} mr={-3}>
          <Outlet />
        </Box>
      </Main>
    </Box>
  );
}

export default Layout;
