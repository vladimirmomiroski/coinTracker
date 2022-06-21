import React from 'react'
import MainPagesWrapper from '../../components/MainPagesWrapper'
import Navbar from '../../components/Navbar/Navbar'
import BottomAppBar from '../../components/Menu/BottomAppBar'
import Chart from './Chart'
import ChartMulti from './ChartMulti'


export default function Statistics() {
  return (
      <>
    <Navbar/>
    <MainPagesWrapper>
    <Chart type="income" title="Income"/>
    <Chart type="expense" title="Expenses"/>
    <ChartMulti/>
    </MainPagesWrapper>
    <BottomAppBar/>
    </>
  )
}