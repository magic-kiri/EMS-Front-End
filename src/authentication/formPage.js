
import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './formStyle';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © SUST-CSE '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const initialInfo = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  teacherMode: false,
  teacherPass: null
}

const signInMode = ['email', 'password'];
const signUpMode = ['firstName', 'lastName', 'teacherMode', 'teacherPass'];

export default function FormPage(props) {
  const classes = useStyles();
  let { formMode, setFormMode } = props;
  const [info, setInfo] = useState(initialInfo);


  function validateForm() {
    let result = true;
    const tmpData = {...info}
    for (let item of signInMode) {
      if (tmpData[item] === null || tmpData[item] ==='' ) {
        tmpData[item] = '';
        result = false;
      }
    }
    if (formMode === 'signUp') {
      for (let item of signUpMode) {
        if (tmpData[item] === null || tmpData[item]==='') {
          tmpData[item] = '';
          result = false;
        }
      }
    }
    setInfo(tmpData);
    return result;
  }
  function submitAction(event) {
    if (validateForm()) {

    }
    else {

    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.currentTarget
    name === "teacherMode" ? setInfo({ ...info, [name]: checked }) : setInfo({ ...info, [name]: value })
  }

  // useEffect( () => setInfo({teacherMode: teacherMode}) , [teacherMode]);


  return (
    <div>
      <ArrowBackIcon onClick={(event) => setFormMode('')}></ArrowBackIcon>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            {formMode === 'signIn' ? 'Log In' : 'Sign Up'}
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              {
                formMode === "signUp" &&
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        error={ info.firstName === ''? true: false }
                        onChange={handleChange} autoComplete="fname" name="firstName" variant="outlined"
                        required fullWidth id="firstName" label="First Name" autoFocus />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        error={ info.lastName === ''? true: false }
                        variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName"
                        autoComplete="lname" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
              }
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange} error={ info.email === ''? true: false }
                  variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange} error={ info.password === ''? true: false }
                  variant="outlined" required fullWidth name="password" label="Password" type="password"
                  id="password" autoComplete="current-password"
                />
              </Grid>
              {
                formMode === 'signUp' &&
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name="teacherMode" color="primary" />}
                    label="Teacher's account."
                  />
                </Grid>
              }
              {
                info.teacherMode &&
                <Grid item xs={12}>
                  <TextField
                    variant="outlined" required fullWidth name="teacherPass" label="Teacher's Private Password" type="password" id="password"
                    autoComplete="current-password" onChange={handleChange} error={ info.teacherPass === ''? true: false }
                  />
                </Grid>
              }

            </Grid>
            <Button
              // type="submit"
              onClick={submitAction} fullWidth variant="contained" color="primary" className={classes.submit}
            >
              {formMode === 'signIn' ? 'Log In' : 'Sign Up'}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link onClick={(event) => setFormMode(formMode === 'signIn' ? 'signUp' : 'signIn')} variant="body2">
                  {formMode === 'signIn' ? `Don't have an account? Sign Up` : 'Already have an account? Sign in'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}