import React from 'react'
import ChartBar from './ChartBar'
import TitlePaperBoxes from '../../components/TitlePaperBoxes'
import {Grid} from "@mui/material"
import {Paper} from '@mui/material'
import { makeStyles } from '@mui/styles'


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
    <TitlePaperBoxes title={title}/>
    <ChartBar type={type}/>
    </Paper>
    </Grid>
    </Grid>
    </>
  )
}



