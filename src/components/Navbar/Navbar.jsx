import React from 'react'
import LogoPart from './LogoPart';
import AvatarPart from './AvatarPart';
import { Container, Grid, AppBar} from '@mui/material';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    navWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.8rem 0.2rem",
    },

  })


export default function Navbar() {

  const {navWrapper} = useStyles()

  return (
    <AppBar>
      <Container maxWidth="xl"
      >
        <Grid container className={navWrapper}>
         <LogoPart/>
         <AvatarPart/>
        </Grid>
      </Container>
    </AppBar>
  )
}
