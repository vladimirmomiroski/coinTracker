import React from 'react'
import {Container} from "@mui/material"
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        margin: theme.spacing(14, 0),
    }
    }))

export default function MainPagesWrapper({children}) {
    const {mainWrapper} = useStyles()
  return (
    <Container className={mainWrapper}>
        {children}
    </Container>
  )
}
