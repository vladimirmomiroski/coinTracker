import React from 'react'
import { Container, Grid} from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  logo: {
    width: "200px",
  }
})


export default function Logo() {

const {logo} = useStyles()

  return (
  <Container
  align="center"
  >
    <Grid item sx={{my: 8}}>
     <img className={logo}  src="assets/images/coinTrackerLogoText.png" alt="logo"/>
     </Grid>
 </Container>
  )
}
