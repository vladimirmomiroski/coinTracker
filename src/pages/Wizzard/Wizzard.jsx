import React, {useContext} from 'react'
import {Container} from "@mui/material"
import HeaderLogo from '../../components/HeaderLogo'
import PageTitle from '../../components/PageTitle'
import StepAmount from './StepAmount'
import StepCategories from './StepCategories'
import StepCompleted from './StepCompleted'
import { Context } from '../../context/Context'


export default function Wizzard() {

  const {step, setStep} = useContext(Context);
  console.log(step)

  return (
    <Container>
      <HeaderLogo/>
      <PageTitle text={"welcome"}/>
      {step === 1 ? <StepAmount setStep={setStep}/> : step === 2 ?
       <StepCategories/> : <StepCompleted/> }
    </Container>
  )
}
