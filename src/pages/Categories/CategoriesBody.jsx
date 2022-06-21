import React, {useContext, useState} from 'react'
import CategoriesItem from '../Categories/CategoriesItem'
import DialogCategory from '../../components/Dialogs/DialogCategory'
import { Paper, Icon, ListItem,ListItemButton,ListItemText, Dialog, Grid  } from "@mui/material"
import TitlePaperBoxes from '../../components/TitlePaperBoxes'
import {Context} from "../../context/Context"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
       justifyContent: "center"
     },
     icon: {
       margin:"0 1rem 0 -0.6rem",
       width:"50px"
     }

}))

export default function CategoriesBody() {

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("")
  const [item, setItem] = useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const {mainWrapper, icon} = useStyles()
  const {categories} = useContext(Context)
  return (
    <>
    <Grid container className={mainWrapper}>
      <Grid item xs={12} sm={8} md={5}>
    <Paper elevation={3} >
        <TitlePaperBoxes title={"Categories"}/>
        <ListItem
         onClick={() => {
        setItem(null)
        setAction("Add")
        handleClickOpen()
         }}
          >
            <ListItemButton>
            <Icon className={icon}>add_icon</Icon>
              <ListItemText primary={`Add new category`} />
            </ListItemButton>
          </ListItem>
        {categories.map(el => (
        el.isEnabled && <CategoriesItem key={el.id} item={el} setItem={setItem} setAction={setAction} clickOpen={handleClickOpen}/>
        ))}
    </Paper>
    <Dialog open={open} onClose={handleClose}>
    <DialogCategory
        handleClose={handleClose}
        open={open}
        action={action}
        cat={item}
        />
        </Dialog>
        </Grid>
        </Grid>
    </>
  )
}
