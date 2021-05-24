import React, { useState, useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import FormPage from './formPage';
import "./styles.css";

function FrontPage(props) {
  const [mode, setMode] = useState('');

  function btnClicked(event) {
    const { value } = event.currentTarget;
    setMode(value);
  }

  let Component = (
    <Container className="buttonPair" maxWidth="xs">
      <Button className="button" variant="contained" color="primary" name="button" onClick={(event) => btnClicked(event)} value="signIn" > Log In </Button>
      <Button className="button" variant="contained" color="primary" name="button" onClick={(event) => btnClicked(event)} value="signUp" > Sign Up </Button>
    </Container>
  );

  return (
    <div>
      {mode === "" ? Component : <FormPage  formMode={mode} setFormMode={setMode} />}
    </div>
  )
}


export default FrontPage;