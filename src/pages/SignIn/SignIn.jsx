import React, { useEffect, useState, useContext } from "react";
import {Context} from '../../context/Context'
import Logo from "../../components/Logo";
import PageTitle from "../../components/PageTitle";
import {
  Grid,
  Typography,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  FormGroup,
  Button,
} from "@mui/material";
import usePasswordValidate from "../../hooks/usePasswordValidate";
import useEmailValidate from '../../hooks/useEmailValidate'
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  errMsg: {
    color: theme.palette.error.main,
    padding: `${theme.spacing(1)} 0`,
    textAlign: "start"
  }
}));

export default function SignIn() {
  const { mainContainer, errMsg} = useStyles();

  const  {isSignedUp, setIsSignedUp} = useContext(Context)
  const [pwValue, pwHandler, pwValidation, errorMsg] = usePasswordValidate();
  const [emailValue, emailHandler, emailValidation, emailErrorMsg] = useEmailValidate();
  const profilePic = useFetch();

  const [showPassword, setShowPassword] = useState(false);
  const [page, setPage] = useState("")
 
  const navigate = useNavigate();
  const {pathname} = useLocation()

  useEffect(() => {
     const path = pathname.split("/")[1]
     setPage(path)
  }, [])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isSignedUp === "true") {
      
      navigate("/Overview");
    } else {
      navigate("/welcomeWizzard")
    }
    localStorage.setItem("profilePic", profilePic);
    setIsSignedUp("true")
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  
  return (
    <Grid container className={mainContainer}>
      <Grid item xs={10} sm={8} md={4}>
      <Logo />
      <PageTitle text={page === "signup" ? "Sign Up" : "Sign In"} />
      <form onSubmit={onSubmitHandler}>
        <FormGroup sx={{ mt: 5 }}>
        <FormControl sx={{ mb: 2 }}>
    <TextField
      type="email"
      id="outlined-basic"
      label="Username"
      variant="outlined"
      onChange={emailHandler}
      value={emailValue}
      error={!emailValidation && emailValue.length > 0}
    />
    
    {(!emailValidation && emailValue.length > 0) && <Typography>{emailErrorMsg}</Typography>}
  </FormControl>
          <FormControl sx={{ mb: 7 }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={pwValue}
              onChange={pwHandler}
              error={!pwValidation && pwValue.length > 0}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {(!pwValidation && pwValue.length > 0) && <Typography className={errMsg}>{errorMsg}</Typography>}
          </FormControl>
        </FormGroup>
        <Button
          sx={{ mb: 1 }}
          elevation="5"
          type="submit"
          size="large"
          variant="contained"
          disabled={(pwValidation && emailValidation) ? false : true}
        >
          {page === "signup" ? "Sign up" : "Sign In"}
        </Button>
      </form>
      <Typography>{page === "signup" ? "Already have account?" : "Don't have account yet?"}</Typography>
      <Link href={page === "signup" ? "/" : "/signup"} color="primary">
      {page === "signup" ? "Sign in please." : "Sign up now, it is free!"}
        
      </Link>
      </Grid>
    </Grid>
  );
}
