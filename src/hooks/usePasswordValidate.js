import {useState} from 'react'

export default function usePasswordValidate() {

    const [pwValue, setPwValue] = useState("")
    const [pwValidation, setValidation] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
         
    const pwHandler = (e) => {
        setPwValue(e.target.value)
        const pwRegex = /(?=.*[!@#$%^&*])/
         if(pwValue.length >= 8 && pwValue.length <= 32 && pwRegex.test(e.target.value)) {
            setErrorMsg("")
            setValidation(true)
         } else if(pwValue.length < 8 || pwValue.length > 32) {
            setErrorMsg("Password needs to be between 8 and 32 characters")
            setValidation(false)
         } else {
             setErrorMsg("Password needs to contain one special character")
             setValidation(false)
         }
        }
  return [pwValue, pwHandler, pwValidation, errorMsg]

}
