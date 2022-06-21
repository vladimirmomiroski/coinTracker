import React from 'react';
import Popper from '../Popper/Popper'
import { makeStyles } from '@mui/styles'

import {AppBar, Box, Typography, Toolbar, Icon} from '@mui/material'
import { NavLink, useLocation} from 'react-router-dom'



const useStyles = makeStyles({
   active: {
     color: "black !important",
     backgroundColor: "blue"
   },
   menuWrapper: {
     display: "flex",
    
   }, 
   linksStyling: {
     textDecoration: "none",
     color: "white",
     textAlign: "center",
     display: "block",
     '&:not(:first-child)': {
      marginLeft: "2rem"
     },
   },
   linksText: {
     fontSize: "14px !important",
   }
})

export default function BottomAppBar() {

  const { menuWrapper, linksStyling, linksText, zIndexWrapper} = useStyles()

  
  
  // active class based on which location
  const loc = useLocation()

  const activeClass = (whichLocation) => {
    const location = loc.pathname.split("/")[1]
    return location === whichLocation ? "secondary" : ""
  }


  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, py: 1 }}>
        <Toolbar className={menuWrapper}>
          <Box className={menuWrapper}>
          <NavLink className={linksStyling} to="/Overview" >
              <Icon color={activeClass("Overview")}>home_icon</Icon>
              <Typography color={activeClass("Overview")} className={linksText}>Overview</Typography>
            </NavLink>
            <NavLink className={linksStyling} to="/Categories">
              <Icon color={activeClass("Categories")}>category_icon</Icon>
              <Typography color={activeClass("Categories")} className={linksText}>Categories</Typography>
            </NavLink>
            <NavLink className={linksStyling} to="/Statistics">
              <Icon color={activeClass("Statistics")}>leaderboard_icon</Icon>
              <Typography color={activeClass("Statistics")} className={linksText}>Statistics</Typography>
            </NavLink>
          </Box>
         <Popper/>
        </Toolbar>
      </AppBar>
    </>
  );
}
