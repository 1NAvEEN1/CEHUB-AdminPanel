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

  const handleItemClick = (itemPath) => {
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
  }, [currentUrl]);

  const Buttons = ({ page }) => {
    return (
      <Grid
        item
        sx={{
          bgcolor:
            currentUrl.split("/")[2] === page.path.split("/")[2]
              ? "white"
              : "transparent",
          color:
            currentUrl.split("/")[2] === page.path.split("/")[2]
              ? "#F47621"
              : "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          p: 1,
          pl: { md: 2, xs: 1 },
          pr: { md: 2, xs: 1 },
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
