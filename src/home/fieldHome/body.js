

import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridColumn from './column';
import SectionTop from './sectionTop';
import getData from '../../methods/getMethod';

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
  
  const [exams,setExams] = useState({upComingExam:[], runningExam:[], endedExam:[]})

  useEffect(async function load() {
    const res= await getData('/exam/currentExam');
    if(res.status===200)
      setExams(res.body);
  }, []);

  

  const classes = useStyles();

  return (
    <div>
      <SectionTop state={props.state} />
      <div className={classes.root} >
        <Grid container item className={classes.container} spacing={2}>
          <GridColumn data={{ exams: exams.upComingExam, state: 'upcoming' }} />
          <GridColumn data={{ exams: exams.runningExam, state: 'running' }} />
          <GridColumn data={{ exams: exams.endedExam, state: 'finished' }} />
        </Grid>
      </div>
    </div>
  )
}