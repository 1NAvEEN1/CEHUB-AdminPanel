import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const PageSwitchButton = ({ currentUrl }) => {
  const count = 205;
  const DashboardPages = [
    { name: "Overview", path: "/Dashboard/Overview" },
    { name: "Map", path: "/Dashboard/Map" },
  ];

  const VerificationPages = [
    { name: "Process (" + count + ")", path: "/Verification/Process" },
    { name: "Verified", path: "/Verification/Verified" },
    { name: "Rejected", path: "/Verification/Rejected" },
  ];

  const navigate = useNavigate();

  const [displayingPages, setDisplayingPages] = useState([]);

  const [selectedPage, setSelectedPage] = useState("");

  const handleItemClick = (itemPath) => {
    setSelectedPage(itemPath);
    navigate(`.${itemPath}`);
  };

  useEffect(() => {
    if (currentUrl.split("/")[1] == "Dashboard") {
      setDisplayingPages(DashboardPages);
    } else if (currentUrl.split("/")[1] == "Verification") {
      setDisplayingPages(VerificationPages);
    } else {
      setDisplayingPages([]);
    }

    setSelectedPage(currentUrl);
  }, [currentUrl]);

  const Buttons = ({ page }) => {
    return (
      <Grid
        item
        sx={{
          bgcolor: page.path === selectedPage ? "white" : "transparent",
          color: page.path === selectedPage ? "#F47621" : "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          p: 1,
          pl: 2,
          pr: 2,
          ":hover": {
            color: "#F47621",
            cursor: "pointer",
          },
        }}
        onClick={() => handleItemClick(page.path)}
      >
        <Typography>{page.name}</Typography>
      </Grid>
    );
  };

  return (
    <Grid
      container
      gap={2}
      sx={{
        bgcolor: "#F5F5F7",
        borderRadius: 1,
        p: 1,
        display: displayingPages.length == 0 ? "none" : "flex",
      }}
    >
      {displayingPages.map((page, key) => (
        <Buttons key={key} page={page} />
      ))}
    </Grid>
  );
};

export default PageSwitchButton;
