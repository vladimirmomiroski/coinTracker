import {useEffect, useState} from 'react'
import {Grid, Button, FormGroup} from '@mui/material'
import StepTitle from '../../components/StepTitle'
import { FormControl, TextField } from '@mui/material'
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
   mainWrapper: {
     justifyContent: "center"
   }
})

export default function StepAmount({setStep}) {

  const {mainWrapper} = useStyles()

  const [ammount, setAmmount] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if(ammount && ammount > 0) {
      setIsDisabled(false) 
    } else {
      setIsDisabled(true) 
    }
  }, [ammount])

  return (
    <Grid container className={mainWrapper}>
      <Grid item xs={10} sm={8} md={5}>
       <StepTitle text={"How much money you have at the moment?"}/>
       <FormGroup>
         <FormControl fullWidth sx={{ my: 5 }}>
         <TextField
          
          id="standard-number"
          label="Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={(e) => setAmmount(e.target.value)}
        />
</FormControl>
            <Button
                 disabled={isDisabled}
                        variant='contained'
                        color='primary'
                        sx={{mt: 5}}
                        onClick={() =>  setStep(2)}
                    >Done</Button>
                    </FormGroup>
                    </Grid>
              </Grid>
  )
}