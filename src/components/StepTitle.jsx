import { Typography, Container } from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  StepTitle: {
  textAlign: "center",
    fontSize:"18px",
  },
  container: {
    margin: theme.spacing(4, 0) 
  }
}))

export default function StepTitle({text}) {
  const {StepTitle, container} = useStyles()
  return (
    <Container className={container}>
    <Typography className={StepTitle}>
        {text}
    </Typography>
    </Container>
  )
}
