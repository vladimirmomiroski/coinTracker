import React, { useContext } from 'react'
import OverviewItem from './OverviewItem'
import TitlePaperBoxes from '../../components/TitlePaperBoxes'
import {Paper, } from '@mui/material'
import {Context} from '../../context/Context'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
     marginBottom: theme.spacing(4)
  },
}))

export default function OverviewCategory({typeCat, title}) {

  const returnBudgetInfo = (entArr, budget) => {
    if(entArr.length) {
      const calcEachEntry = calculateEntries(entArr)
      return `${calcEachEntry}/${budget}`
    } else {
      return budget;
    }
}

  const calculateEntries = (entries) => {
   const totalSum = entries.reduce((acc, sum) => acc + sum.amount, 0)
   return totalSum
  }

  const {mainWrapper} = useStyles()

  const {categories} = useContext(Context)
 
  return (
    <Paper elevation={3} className={mainWrapper}>
      <TitlePaperBoxes title={title}/>
        {categories && categories.map(el => (
          (el.type === typeCat && el.isEnabled) && <OverviewItem key={el.id} {...el} returnBudget={returnBudgetInfo} calcEnt={calculateEntries}/>
        ))}
    </Paper>
  )
}
