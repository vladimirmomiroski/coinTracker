import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: 60,
    height: 50,
    marginRight: 10,
  },
});

export default function LogoPart() {
  let path = useLocation();
  const pathTitle = path.pathname.split("/")[1];

  const { logoWrapper, logoImage, pageTitle } = useStyles();

  return (
    <Box className={logoWrapper}>
      <img
        className={logoImage}
        src="assets/images/coinTrackerLogo.png"
        alt="logo"
      />
      <Typography className={pageTitle}>{pathTitle}</Typography>
    </Box>
  );
}
