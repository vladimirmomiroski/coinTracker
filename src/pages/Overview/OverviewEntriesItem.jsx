import React, {useState, useContext} from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Typography, Icon, MenuItem, Menu, Dialog} from '@mui/material'
import DialogEntry from '../../components/Dialogs/DialogEntry'
import {Context} from '../../context/Context'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    amountStyle: {
        textAlign:"end",
         fontSize: "1.2rem !important",
    },
    avatarBackground: {
      backgroundColor: `${theme.palette.secondary.secondary} !important`
    },
    itemHover: {
      "&:hover": {
        cursor: "pointer"
      }
    }
   
}))

export default function InsetDividers({entry}) {

    const {amountStyle, avatarBackground, itemHover} = useStyles()

    const {deleteEntryItem, duplicateEntryItem} = useContext(Context)
    const {name, amount, type, icon, date, id, parentId} = entry
    const checkType = type === "income" ? "+" : "-"

    const handleClick = (event) => {
      setAnchorEl(event.target);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = useState(false);
    const [action, setAction] = useState("")
    const [item, setItem] = useState(null)

    // Dialog
    const handleClickDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };

    const colorText = type === "income" ?  "#00FF00" : "#FF0000"

  return (
    <>
    <List
    onClick={(e) => {
      handleClick(e)}}
      className={itemHover}
    > 
      <ListItem>
        <ListItemAvatar>
          <Avatar className={avatarBackground}>
            <Icon sx={{color: colorText}}>{icon}</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={date} />
        
        <ListItemText sx={{color: colorText}} primary={<Typography className={amountStyle}>{checkType} {amount}</Typography>}/>
      </ListItem>
       <Divider variant="inset" component="li" />
    </List>
      <Menu
        id="basic-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {
          duplicateEntryItem(entry)
          handleClose()}}>Duplicate</MenuItem>
        <MenuItem onClick={() => {
          setAction("Add")
          handleClickDialog()
          handleClose()}}>Create New</MenuItem>
        <MenuItem  onClick={() => {
          setItem(entry)
          setAction("Update")
          handleClickDialog()
         handleClose()
        }}>Edit</MenuItem>
        <MenuItem onClick={() => {
        deleteEntryItem(id, parentId)
        handleClose()
        }}>Delete</MenuItem>
      </Menu>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
       <DialogEntry
        handleClose={handleCloseDialog}
        open={openDialog}
        type={type}
        action={action}
        item={item}
        />
        </Dialog>   
   </>
  )}