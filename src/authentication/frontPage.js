import React, { useState } from 'react';
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
  const state = { ...props.state,  formMode: mode, setFormMode: setMode }
  return (
    <div>
      {mode === "" ? Component : <FormPage state = {state} />}
    </div>
  )
}


export default FrontPage;