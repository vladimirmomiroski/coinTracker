import React, {useContext, useEffect, useState} from 'react'
import StepCategoriesItem from './StepCategoriesItem';
import {Grid, FormControl, FormGroup, Button} from '@mui/material';
import StepTitle from '../../components/StepTitle'
import {Context} from "../../context/Context"
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
     mainWrapper: {
       display: "flex",
        justifyContent: "center",
     },
})


export default function StepAmmount() {

  const {mainWrapper} = useStyles()

    const {categories, setCategories, setStep} = useContext(Context)
    const [isDisabled, setIsDisabled] = useState(false)

    const selectCategories = (id) => {
       const updated = categories.map(category => {
          if(category.id === id) {
              category.isEnabled = !category.isEnabled
          }
          return category
        })
      setCategories(updated)
    } 

    useEffect(() => {
      const filteredCategories = categories.filter(el => el.isEnabled)
      setIsDisabled(!filteredCategories.length)
    }, [categories])

   
  return (
    <Grid className={mainWrapper}>
      <Grid item xs={10} sm={8} md={5}>
       <StepTitle text={"Choose what you spend money on"}/>
       <FormGroup >
       <FormControl>
                    {categories.map(el =>
                        <StepCategoriesItem key={el.id} item={el} selectCategories={selectCategories}/>
                    )}
                    <Button
                    sx={{mt: 4}}
                       disabled={isDisabled}
                        variant='contained'
                        color='primary'
                        onClick={() => setStep(3)}
                    >Done</Button>
            </FormControl>
            </FormGroup>
            </Grid>
    </Grid>
  )
}
