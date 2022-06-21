import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StepTitle from "../../components/StepTitle";
import {Grid, Icon, Box, FormControl, FormGroup, Button, Typography, TextField} from '@mui/material';
import {Context} from '../../context/Context'


import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    justifyContent: "center",
     },
    itemsWrapper : {
       display:"flex",  
       justifyContent: "space-between",
       alignItems: "center",
       width: "100%"
    },
    iconWrapper : {
      width: "15%",
    },
    checkboxWrapper : {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "85%",
      borderBottom: "1px solid lightgray",
      padding: `${theme.spacing(1.5)} 0`
    },
    inputStyle: {
      width:"20%",
    },
    fontText: {
      fontWeight: "bold"
    }
}))


export default function StepCompleted() {

  const {mainWrapper, itemsWrapper, iconWrapper, checkboxWrapper, inputStyle, fontText} = useStyles()
  const {categories, setAmountOnCategories, setStep} = useContext(Context)

  const categoriesAmmounts = () => {
     navigate("/Overview")
    setStep(1)
  };

  const navigate = useNavigate();

  return (
    <Grid container className={mainWrapper}>
      <Grid item xs={10} sm={8} md={5}>
      <StepTitle text={"Set how much money you want to spend on each category monthly"} />
     <FormGroup >
       <FormControl>
                    {categories.map(({ id, name, icon, isEnabled}) =>
                        isEnabled && <Box className={itemsWrapper} key={id}>
                        <Box className={iconWrapper}>
                         <Icon>{icon}</Icon>
                         </Box>
                         <Box className={checkboxWrapper}>
                          <Typography className={fontText} >{name}</Typography>
                          <TextField className={inputStyle} id="filled-basic" size="small" label="Amount" variant="standard" onChange={(e) => setAmountOnCategories(e.target.value, id)} />
                           </Box> 
                        </Box>
                    )}
                    <Button
                    sx={{mt: 4}}
                        variant='contained'
                        color='primary'
                        onClick={() => categoriesAmmounts()}
                    >Done</Button>
            </FormControl>
            </FormGroup>
            </Grid>
    </Grid>
  );
}
