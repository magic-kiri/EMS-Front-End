

import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import data from '../data'
import { makeStyles } from '@material-ui/core/styles';
import GridColumn from './column';
import SectionTop from './sectionTop';

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

export default function Body(props) {
  const [upcomingExam] = useState(data.upcomingExam);
  const [runningExam] = useState(data.runningExam);
  const [finishedExam] = useState(data.finishedExam);
  const classes = useStyles();

  return (
    <div>
      <SectionTop state={props.state} />
      <div className={classes.root} >
        <Grid container item className={classes.container} spacing={2}>
          <GridColumn data={{ exams: upcomingExam, state: 'upcoming' }} />
          <GridColumn data={{ exams: runningExam, state: 'running' }} />
          <GridColumn data={{ exams: finishedExam, state: 'finished' }} />
        </Grid>
      </div>
    </div>
  )
}