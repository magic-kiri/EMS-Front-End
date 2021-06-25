

import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridColumn from './column';
import SectionTop from './sectionTop';
import getData from '../../methods/getMethod';
import { Row } from '../../utils/styles';

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

  const [exams, setExams] = useState({ upComingExam: [], runningExam: [], endedExam: [] })

  useEffect(async function load() {
    const res = await getData('/exam/currentExam');
    if (res.status === 200)
      setExams(res.body);
    // const intervalId = setInterval(async() => {
        
    //   console.log('refreshing');
    //   const res = await getData('/exam/currentExam');
    //   if (res.status === 200) {
    //     console.log('reload');
    //     setExams(res.body);
    //   }
    // }, 2000)
    // return () => clearInterval(intervalId)
    
    // const refresh = setInterval(async () => {
    // return clearInterval(refresh)
  }, []);

  const {} = props.state;

  const classes = useStyles();

  return (
    <div>
      <SectionTop state={props.state} />
      <div className={classes.root} >
        <Row columns="1fr 1fr 1fr">
          <GridColumn data={{ exams: exams.upComingExam, state: 'upcoming', ... props.state }} />
          <GridColumn data={{ exams: exams.runningExam, state: 'running', ... props.state}} />
          <GridColumn data={{ exams: exams.endedExam, state: 'finished', ... props.state }} />
        </Row>
      </div>
    </div>
  )
}