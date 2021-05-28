import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { store } from '../store/store';
import { loggedUser, isLogged } from '../redux/actions';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { users } = useSelector((state) => state);
  const { admin } = useSelector((state) => state);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [flag, setflag] = useState(true);
  const [userType, setuserType] = useState("User");

  let history = useHistory();
  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlePass = (e) => {
    setpass(e.target.value);
  };
  const changeUserType = (e) => {
    setuserType(e.target.value);
    console.log(userType);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clickes");
    if(userType == "User"){
    users.map((user,index)=>
    
     (user.email == email && user.pass == pass)? 
      history.push("/userDashboard")
     : 
      document.getElementById("invalid").innerHTML = "invalid user data!"
  
    )
    users.map((user,index)=>
    
     (user.email == email && user.pass == pass)? 
     store.dispatch(loggedUser(user))
     : 
      document.getElementById("invalid").innerHTML = "invalid user data!"
  
    )
    users.map((user,index)=>
    
     (user.email == email && user.pass == pass)? 
     store.dispatch(isLogged(true))
     : 
      document.getElementById("invalid").innerHTML = "invalid user data!"
  
    )
    }else if(userType == "Admin"){

      admin.map((adm,index)=>
    
     (adm.email == email && adm.pass == pass)? 
      history.push("/adminDashboard")
     : 
      document.getElementById("invalid").innerHTML = "invalid user data!"
  
    )
    admin.map((adm,index)=>
    
     (adm.email == email && adm.pass == pass)? 
     store.dispatch(loggedUser(adm))
     : 
      document.getElementById("invalid").innerHTML = "invalid user data!"
  
    )
    admin.map((adm,index)=>
    
     (adm.email == email && adm.pass == pass)? 
     store.dispatch(isLogged(true))
     : 
      document.getElementById("invalid").innerHTML = "invalid user data!"
  
    )

    }


    
  };
  // useEffect(() => {
  //   users.map((user,index)=>
    
  //   (user.email == email && user.pass == pass)? 
  //   store.dispatch(loggedUser(user))
  //   :
  //   []
    
  //   )

  // }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign in 
        </Typography>
        <RadioGroup row aria-label="position" name="position" defaultValue="User" onChange={e=> changeUserType(e)}>
        <FormControlLabel
          value="Admin"
          control={<Radio color="primary" />}
          label="Admin"
          labelPlacement="Admin"
        />
        <FormControlLabel
          value="User"
          control={<Radio color="primary" />}
          label="User"
          labelPlacement="User"
        />
        
        </RadioGroup>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => handleEmail(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => handlePass(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>{" "}
          <span id="invalid"></span>
          <Grid container>
          <Grid item>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}