import React from 'react'
import TitlePaperBoxes from '../../components/TitlePaperBoxes'
import {Grid} from "@mui/material"
import {Paper} from '@mui/material'
import { makeStyles } from '@mui/styles'
import ChartBarMulti from './ChartBarMulti'


const useStyles = makeStyles((theme) => ({
   mainWrapper: {
     marginBottom: theme.spacing(5),
     justifyContent: "center"
   },
}))

export default function Chart({type, title}) {

  const {mainWrapper} = useStyles()


  return (
    <>
    <Grid container className={mainWrapper}>
      <Grid item xs={12} sm={8} md={6}>
    <Paper elevation={3} >
    <TitlePaperBoxes title={"Expenses & Income"}/>
    <ChartBarMulti/>
    </Paper>
    
    </Grid>
    </Grid>
    </>
  )
}
