



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LeftNavBar from './component/leftNavBar';
import RightNavBar from './component/rightNavBar'
import BottomNavbar from './component/bottomNavbar';
import Questions from './component/questions';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // backgroundColor: 'red',
        flexGrow: 1,
        height: '90vh',
    },
    leftBar: {
        // backgroundColor: 'green',
        boxShadow: theme.shadows[5],
        // flexGrow: 1,
        width: '22vw',
        height: '100%',
    },
    mid: {
        // backgroundColor: 'purple',
        flexGrow: 1,
    },
    rightBar: {
        // backgroundColor: 'green',
        boxShadow: theme.shadows[5],
        // flexGrow: 1,
        height: '100%',
        width: '20vw',
    },


}));

export default function TeacherView(props) {

    let { id } = useParams();
    const { teacherMode } = props.state;


    

    const classes = useStyles();


    return (
        <div className={classes.root}>
            {
                teacherMode &&
                <div className={classes.leftBar}>
                    <LeftNavBar />
                </div>
            }
            <div className={classes.mid}>
                <Questions state={{ id: id, teacherMode: teacherMode }} />
                <BottomNavbar />
            </div>
            {
                teacherMode &&
                <div className={classes.rightBar}>
                    <RightNavBar />
                </div>
            }
        </div>
    )
}
