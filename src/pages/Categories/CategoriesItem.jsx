import React from 'react'
import {Box, Icon,Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  itemsWrapper: {
    display:"flex",  
    alignItems: "center",
    width:"100%",
    margin: "0 auto",
    padding: theme.spacing(0, 1.5),
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
      "&:hover": {
        cursor: "pointer",
      }
 },
 iconWrapper : {
   width: "10%",
   textAlign:"center",
   marginRight: theme.spacing(1),
   paddingBottom: theme.spacing(1)
 },
 checkboxWrapper : {
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   width: "90%",
   borderBottom: "1px solid lightgray",
   paddingBottom: theme.spacing(1),
   
 },
typeExpense: {
  color: "#c62828"
},
typeIncome: {
  color: "#4caf50"
},
budgetInfo: {
  textAlign: "end",
},
budgetText: {
  fontSize: "11px !important"
}
}))

export default function CategoriesItem(props) {

   const {item, setItem, setAction, clickOpen} = props;
   
   const {itemsWrapper, iconWrapper, checkboxWrapper, typeExpense, typeIncome, budgetText, budgetInfo} = useStyles()
     const {icon, name, budget, type} = item
    
     const checkBudget = () => {
      const checkBudget = (budget > 0 && type === "expense") ? "budget" : type === "income" ? "planned" : "no budget limit"
      return checkBudget
     }

     const checkType = type === "expense" ? typeExpense : typeIncome
     
  return ( 
              <Box className={itemsWrapper} onClick={() => {
                setItem(item)
                setAction("Update")
                clickOpen()
            }}>
                    <Box className={iconWrapper}>
                     <Icon className={checkType}>{icon}</Icon>
                     </Box>
                     <Box className={checkboxWrapper}>
                      <Typography className={checkType}>{name}</Typography>
                      <Box className={budgetInfo}>
                      <Typography className={checkType}>{budget}</Typography>
                      <Typography className={budgetText}>{checkBudget()}</Typography>
                      </Box>
                       </Box> 
                    </Box>
  )
}


