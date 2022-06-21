import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DialogEntry from "../Dialogs/DialogEntry"
import { Dialog } from '@mui/material';
import {makeStyles} from '@mui/styles'
const useStyles = makeStyles((theme) => ({
  buttonsWrapper: {
    display: "flex",
    flexDirection: "column",
   
  },
  zIndexWrapper: {
    zIndex: "10 !important",
  },

  buttonStyle: {
    marginBottom: `${theme.spacing(2)} !important`,
    
  },
  overlay: {
    position: "fixed",
    height:"100%",
    width: "100%",
    top: "0",
    left: "0",
    backgroundColor: "rgb(255, 255, 255, 0.4)",
  }
}))


const StyledFab = styled(Fab)({
    position: 'absolute',
    width:60,
    height:60,
    zIndex: 1,
    top: -30,
    right: 30,
  });

export default function PositionedPopper() {

  const {buttonsWrapper, buttonStyle, overlay, zIndexWrapper} = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const [openDialog, setOpenDialog] = useState(false);
    const [type, setType] = useState("")

    const handleClickOpen = () => {
        setOpenDialog(true);
      };
    
      const handleClose = () => {
        setOpenDialog(false);
      };
  
    const handleClick = (newPlacement) => (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <>
     {/* {open && <Box className={overlay}></Box>} */}
    <Box className={zIndexWrapper} sx={{ width: 500 }}>
      <Popper className={zIndexWrapper} open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade  {...TransitionProps} timeout={350}>
            <Paper className={buttonsWrapper}>
               <Button className={buttonStyle} variant="contained" color='primary' onClick={() => {
                handleClickOpen() 
                setType("expense")
                setOpen(false)
             }}>ADD EXPENSE</Button>
             <Button className={buttonStyle} variant="contained" color='primary' onClick={() => {
                 setType("income")
                 handleClickOpen()
                 setOpen(false)}}>ADD INCOME</Button>
            </Paper>
          </Fade>
        )}
        
      </Popper>
     
      <Grid container justifyContent="center" >
        <Grid item >
        <StyledFab  color="secondary" aria-label="add" onClick={handleClick('top-end')}>
            <AddIcon />
          </StyledFab>
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={handleClose}>
    <DialogEntry
        handleClose={handleClose}
        open={openDialog}
        action={"Add"}
        type={type}
        />
        </Dialog>      
        
    </Box>
     
    </>
  );
}