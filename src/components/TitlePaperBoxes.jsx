import React from 'react'
import {Box, Typography} from "@mui/material"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
     mainWrapper: {
      padding: theme.spacing(1.5),
      backgroundColor: theme.palette.secondary.secondary,
     },
     titleStyle: {
      color: theme.palette.primary.secondary
     }
}))

export default function TitlePaperBoxes({title}) {

    const {mainWrapper, titleStyle} = useStyles()
  return (
    <Box className={mainWrapper}>
    <Typography className={titleStyle}>
    {title}
    </Typography>
  </Box> 
  )
}
