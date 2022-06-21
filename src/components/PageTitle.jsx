import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  titleStyle: {
    textAlign: "center",
    margin: "1.2rem 0 1rem",
    letterSpacing: "0.4rem"
  }
})

export default function PageTitle({text}) {

  const {titleStyle} = useStyles()
  const title = text.toUpperCase()
  return (
    <Typography variant="h4" className={titleStyle}>
        {title}
    </Typography>
  )
}
