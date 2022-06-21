import React, {useEffect, useState, useContext} from 'react'
import {Alert} from '@mui/material'
import TitlePaperBoxes from '../../components/TitlePaperBoxes'
import OverviewEntriesItem from './OverviewEntriesItem'
import {Paper} from "@mui/material"
import {Context} from '../../context/Context'

export default function OverviewEntries({title}) {
  const {categories} = useContext(Context)

  const [entries, setEntries] = useState([])

  useEffect(() => {
    let entriesArr = []
      categories && categories.forEach(el => {
         if(el.entries.length) {
           el.entries.forEach(entry => {
             entriesArr = [...entriesArr, entry]
           })
         }
      })
       setEntries(entriesArr)
  }, [categories])

  return (
    <>
    <Paper elevation={3}>
        <TitlePaperBoxes title={title}/>
        {entries.length ? entries.map(entry => (
          <OverviewEntriesItem entry={entry} key={entry.id}/>
        )) : <Alert severity="info">No Entries</Alert>}
    </Paper>
    </>
  )
}
