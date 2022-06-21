import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BottomAppBar from '../../components/Menu/BottomAppBar'
import OverviewCategory from './OverviewCategory'
import MainPagesWrapper from '../../components/MainPagesWrapper'
import OverviewEntries from './OverviewEntries'
import {Grid} from '@mui/material'
import {makeStyles} from "@mui/styles"
const useStyles = makeStyles({
  itemWrapper: {
    margin: "0 auto !important"
  }
})

export default function Overview() {

  const {itemWrapper} = useStyles()
  
  return (
    <>
    <Navbar/>
    <MainPagesWrapper>
    <Grid
    
    >
      <Grid item xs={12} sm={8} md={5} className={itemWrapper}>
    <OverviewCategory title={"Income"} typeCat={"income"}/>
    </Grid>
    <Grid item xs={12} sm={8} md={5} className={itemWrapper}>
    <OverviewCategory title={"Expenses"} typeCat={"expense"}/>
    </Grid>
    <Grid item xs={12} sm={8} md={5} className={itemWrapper}>
      <OverviewEntries title={"Entries"} />
    </Grid>
    </Grid>
    </MainPagesWrapper>
    <BottomAppBar/>
    </>
  )
}
