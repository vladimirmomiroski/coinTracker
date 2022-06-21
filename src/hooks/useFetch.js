import {useEffect, useState} from 'react'

export default function useFetch() {

    const [image, setImage] = useState("")

         useEffect(() => {
           fetch("https://randomuser.me/api/")
           .then(res => res.json())
           .then(data => {
               const imgUrl = data.results[0].picture.thumbnail
               setImage(imgUrl)
           })
         }, [])

 
  return [image]

}
