import React from 'react'
import {Box, Checkbox, FormControlLabel, Typography,  Icon} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    itemsWrapper: {
        display:"flex",  
        justifyContent: "space-between",
        alignItems: "center",
        width:"100%",
        margin: "0 auto"
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
       paddingBottom: theme.spacing(0.5)
     },
     fontText: {
      fontWeight: "bold"
    }
}))

export default function StepCategoriesItem({item, selectCategories}) {

    const {itemsWrapper, iconWrapper, checkboxWrapper, fontText} = useStyles()
    const {icon, name, isEnabled, id} = item
  return (
    <Box className={itemsWrapper}>
                        <Box className={iconWrapper}>
                         <Icon>{icon}</Icon>
                         </Box>
                         <Box className={checkboxWrapper}>
                          <Typography className={fontText}>{name}</Typography>
                            <FormControlLabel
                                control={<Checkbox color="primary"
                                    checked={isEnabled}
                                    onChange={() => selectCategories(id)}
                                    size="large"
                                />}
                                label=""
                                labelPlacement="start"
                            />
                           </Box> 
                        </Box>
  )
}
