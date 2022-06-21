import {useState} from 'react'

export default function usePasswordValidate() {

    const [emailValue, setEmailValue] = useState("")
    const [emailValidation, setEmailValidation] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState("")
         
    const emailHandler = (e) => {
         setEmailValue(e.target.value)
         const regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/
         if(regexEmail.test(e.target.value)) {
            setEmailValidation(true)
            setEmailErrorMsg("")
         } else {
            setEmailValidation(false)
            setEmailErrorMsg("Please enter valid email")
         }
        }
 
  return [emailValue, emailHandler, emailValidation, emailErrorMsg]

}
