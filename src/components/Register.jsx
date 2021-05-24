import React,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MuiPhoneNumber from "material-ui-phone-number";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {store} from '../store/store'
import { insertUser } from '../redux/actions'



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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  contact: {
    width: '100%'
  },
  imageUp: {
    display: "none"
  },
  button: {
    
    margin: 10
  },
  upload: {
    flexDirection: "row"
  }
  
}));



export default function Register() {
  const classes = useStyles();
  const [selectedFile, setselectedFile] = useState(null);
  const [phone, setphone] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [isValidated, setIsValidated] = useState(false);

  const handlePhoneChange = (value) => {
    
    console.log(phone);
      setphone(value);
    
  }

  const handleUploadClick = (event) => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
    reader.onloadend = function (e) {
      setselectedFile(
         [reader.result]
      );
    }.bind(this);
    console.log(url); // Would see a path?
  
    setselectedFile( event.target.files[0]);
  };



  const handleFname = (e) => {
    setfName(e.target.value);
    console.log(fName);
  };

  const handleLname = (e) => {
    setlName(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handlePass = (e) => {
    setpass(e.target.value);
  };

  const handleConPass = (e) => {
    setpass(e.target.value);
  };

  const handleAddress = (e) =>{
    setaddress(e.target.value);
  }

  const register = (e) => {
    e.preventDefault();

    var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    // if (fName.length < 1) {
    //   setIsValidated(false);
    //   document.getElementById("fname").innerHTML = "Field is required!";
    // } else if (fName.length < 3) {
    //   setIsValidated(false);

    //   document.getElementById("fname").innerHTML = "lenght more than 3!";
    // } else if (lName.length < 1) {
    //   setIsValidated(false);

    //   document.getElementById("lname").innerHTML = "Field is required!";
    // } else if (lName.length < 3) {
    //   setIsValidated(false);

    //   document.getElementById("lname").innerHTML = "lenght more than 3!";
    // } else if (pass.length < 6 || !pass.match(pwd)) {
    //   setIsValidated(false);

    //   document.getElementById("pass").innerHTML =
    //     "length more than 6 & one character, Uppercase , lowercase required";
    // } else {
      setIsValidated(true);
    // }
  };

  useEffect(() => {
    if (isValidated) {
      store.dispatch(
        insertUser({ firstName: fName, 
          lastName: lName,
          email: email, 
          pass: pass,
          address: address,
          profilePic: selectedFile,
          phone: phone })
      );
      
      
    }
  }, [isValidated]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={(e) => register(e)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => handleFname(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => handleLname(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => handleemail(e)}
              />
            </Grid>
            
            
            <Grid item xs={12}>
            <MuiPhoneNumber
                    name="phone"
                    label="Phone Number*"
                    data-cy="user-phone"
                    defaultCountry={'us'}
                    value={phone}
                    onChange={(e) =>handlePhoneChange(e)}
                    className={classes.contact} variant="outlined"
                  />
            </Grid>
            <Grid item xs={12}>
            <TextField 
            label="Address*" 
            aria-label="minimum height" 
            rowsMin={3} 
            placeholder="Address"
            className={classes.contact} 
            variant="outlined" 
            onChange={(e) => handleAddress(e)}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => handlePass(e)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="conformpassword"
                onChange={(e) => handleConPass(e)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} display="flex" className={classes.upload}>
            <input
              accept="image/*"
              className={classes.imageUp}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => handleUploadClick(e)}
            />
           
            <label htmlFor="contained-button-file">
               <Typography component="h1" variant="h5">
          Upload profile
        </Typography>
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}