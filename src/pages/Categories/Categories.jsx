import React, { useContext } from 'react'
import CategoriesBody from './CategoriesBody'
import Navbar from '../../components/Navbar/Navbar'
import BottomAppBar from '../../components/Menu/BottomAppBar'
import MainPagesWrapper from '../../components/MainPagesWrapper'

export default function Categories() {

  
  return (
      <>
    <Navbar/>
    <MainPagesWrapper>
      <CategoriesBody/>
    </MainPagesWrapper>
    <BottomAppBar/>
    </>
  )
}
