import React, { useContext, useState, useEffect} from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";

import { format } from 'date-fns'
import {Context} from '../../context/Context'
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
  titleStyle: {
    padding: "15px 25px 0 25px !important",
  },
  inputSpacing: {
    marginBottom: "1.2rem !important",
  },
  actionWrapper: {
    padding: "1rem 1.5rem !important",
    justifyContent: "space-between !important",
  }
})



export default function FormDialog({ handleClose, action, type, item }) {

  const {inputSpacing, titleStyle, actionWrapper} = useStyles()

    // format date for date input
    const date = new Date()
    const formatedDate = format(date, "yyyy-MM-dd")
 
    const [filteredType, setFilteredType] = useState([])

    // filtering the categories that are enabled from that type
    const filteredByType = (type) => {
        const filtered = categories.filter(el => {
            if(el.isEnabled && el.type === type) {
                return el
            }
            return false
        })
        setFilteredType(filtered)
        console.log(filtered)
    }

    useEffect(() => {
       filteredByType(type)
    }, [])

    const findParentId = (name) => {
     const categoryItem = categories.find(el => el.name === name)
     return categoryItem.id
    }
   

  const { categories, addEntryItem, updateEntryItem } = useContext(Context);
  
  const [itemObj, setItemObj] = useState(item || {
    type,
    name: "",
    desc: "",
    date: "",
    amount: "",
    date: formatedDate,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const parentId = findParentId(itemObj.name)
    action === "Add" ? addEntryItem(itemObj, parentId) : updateEntryItem(itemObj)
    handleClose()
  }

  return (
    <>
      <DialogTitle className={titleStyle}>{action}</DialogTitle>
      <form onSubmit={onSubmitHandler}>
      <DialogContent>
        <FormControl className={inputSpacing} margin="dense" fullWidth>
          <InputLabel>Type</InputLabel>
          <Select required label={"Type"} value={itemObj.type} onChange={(e) => {
              setItemObj({ ...itemObj, type: e.target.value })
              filteredByType(e.target.value)
             }}>
            <MenuItem disabled={true} value="">Type</MenuItem>
            <MenuItem value={"income"}>Income</MenuItem>
            <MenuItem value={"expense"}>Expense</MenuItem>
          </Select>
        </FormControl>
        <FormControl required className={inputSpacing} margin="dense" fullWidth>
          <InputLabel variant="outlined">Category</InputLabel>
          <Select label={"name"} variant="outlined" required value={itemObj.name} onChange={(e) => {
              setItemObj({ ...itemObj, name: e.target.value })
              }}>
            {filteredType.map(({id, name}) => (
               <MenuItem value={name} key={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl >
        <TextField
        className={inputSpacing}
          type={"number"}
          margin="dense"
          label="Amount"
          fullWidth
          required
          variant="outlined"
          value={itemObj.amount}
          onChange={(e) => setItemObj({ ...itemObj, amount: +e.target.value })}
        />
      <TextField className={inputSpacing} id="today" fullWidth variant='outlined' value={itemObj.date} color='secondary' type="date"
       onChange={(e) => setItemObj({ ...itemObj, date: e.target.value })} />
        <TextField
          type={"text"}
          margin="dense"
          label="Description (optional)"
          fullWidth
          variant="outlined"
          value={itemObj.desc}
          onChange={(e) => setItemObj({...itemObj, desc: e.target.value})}  
        />
      </DialogContent>
      <DialogActions className={actionWrapper}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color="primary" type="submit">
          {action}
        </Button>
      </DialogActions>
      </form>
    </>
  );
}
