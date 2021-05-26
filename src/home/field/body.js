

import { Container, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import data from '../data'
import { makeStyles } from '@material-ui/core/styles';
import GridColumn from './column';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    margin: theme.spacing(4),
  },
  container: {
    justifyContent: 'space-around',
    display: 'flex',
  },
}));

export default function Body() {
  const [upcomingExam, setUpcomingExam] = useState(data.upcomingExam);
  const [runningExam, setrunningExam] = useState(data.runningExam);
  const [finishedExam, setFinishedExam] = useState(data.finishedExam);
  const classes = useStyles();

  const style = {
    backgroundColor: 'red',
  }
  return (
    <div className={classes.root} >
      <Grid container item className={classes.container} spacing={2}>
        <GridColumn data={{exams: upcomingExam, state: 'upcoming'}} />
        <GridColumn data={{exams: runningExam, state: 'running'}} />
        <GridColumn data={{exams: finishedExam, state: 'finished'}} />
      </Grid>
    </div>
  )
}