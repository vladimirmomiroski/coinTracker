import React, { useState, useContext } from "react";
import {initialCategories, icons} from "../../initialCategories"
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Icon
} from "@mui/material";
import {Context} from "../../context/Context"
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


export default function FormDialog({ handleClose, action, cat}) {

  const {inputSpacing, titleStyle, actionWrapper} = useStyles()
     
    // getting all icons
    const categoriesIcons = initialCategories.map(category => category.icon);
    const allIcons = [...icons, ...categoriesIcons];
    const allUniqueIcons = [...new Set(allIcons)];

    const {addCategoryItem, updateCategoryItem} = useContext(Context)
 
  const [itemObj, setItemObj] = useState(cat || {
    type: "income",
    icon: "accessibility",
    budget: "",
    isEnabled: true,
    name: "", 
    entries: []
  });

  const onSubmitHandler = (e) => {
    e.preventDefault()
    action === "Add" ? addCategoryItem(itemObj) : updateCategoryItem(itemObj)
    handleClose()
  }

  const actionTitle = (action) => {
    const result = action === "Add" ? action + " New Category" : action + " Category";
    return result;
  };

  return (
    <>
        <DialogTitle className={titleStyle}>{actionTitle(action)}</DialogTitle>
        <form onSubmit={onSubmitHandler}>
        <DialogContent>
          <FormControl className={inputSpacing} margin="dense" fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              label={"Type"}
              value={itemObj.type}
              onChange={(e) => {
                setItemObj({ ...itemObj, type: e.target.value });
              }}
              required
            >
              <MenuItem value={"income"}>Income</MenuItem>
              <MenuItem value={"expense"}>Expense</MenuItem>
            </Select>
          </FormControl>
          <TextField
          className={inputSpacing}
            variant="outlined"
            value={itemObj.name}
            required
            margin="dense"
            label="Name"
            fullWidth
            onChange={(e) => {
              setItemObj({ ...itemObj, name: e.target.value });
            }}
          />
             <FormControl margin="dense" fullWidth>
            <InputLabel variant="outlined">Icon</InputLabel>
            <Select
            className={inputSpacing}
            required
              label={"Icon"}
              variant="outlined"
              value={itemObj.icon}
              onChange={(e) => {
                setItemObj({ ...itemObj, icon: e.target.value });
              }}
            >
              {allUniqueIcons.map(icon => (
                <MenuItem value={icon} key={icon}>
                  <Icon>{icon}</Icon> {icon}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
          className={inputSpacing}
            type={"number"}
            required
            value={itemObj.budget}
            margin="dense"
            label="Budget"
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setItemObj({ ...itemObj, budget: +e.target.value });
            }}
          />
             <FormControl fullWidth variant="outlined">
            <FormControlLabel
              variant="outlined"
              control={
                <Checkbox
                checked={itemObj.isEnabled}
                  onChange={(e) => {
                    setItemObj({ ...itemObj, isEnabled: e.target.checked });
                  }}
                  color="primary"
                />
              }
              label="Enabled"
            />
          </FormControl>
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


