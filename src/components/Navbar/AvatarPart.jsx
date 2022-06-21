import React, {useState, useEffect} from 'react'
import {Box, Avatar} from "@mui/material";
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
  borderImg: {
    border: "2px solid white"
  }
})

export default function AvatarPart() {

  const {borderImg} = useStyles()

    const [img, setImg] = useState("")

useEffect(() => {
  const profileImgFromStorage = localStorage.getItem("profilePic")
  if(profileImgFromStorage) {
      setImg(profileImgFromStorage)
  }
}, [])

  return (
    <Box>   
    <Avatar src={img} alt="profile picture" sx={{width: 53, height: 53}} className={borderImg}/>     

    </Box>
  )
}
