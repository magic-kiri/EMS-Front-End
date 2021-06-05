import { Card, CardContent } from "@material-ui/core"
import TeacherProfile from './fieldProfile/teacherProfile'
import StudentProfile from "./fieldProfile/studentProfile";

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getData } from "../methods";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '90vh',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    card: {
        // minWidth: 300,
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-around',
        // justifyContent: 'space-between',
    },

}));

export default function Profile(props) {
    const classes = useStyles();
    const [profileInfo, setProfileInfo] = useState(getData('/profileData'));
    let component;
    if (props.state.teacherMode) {
        component = <TeacherProfile />
    }
    else {
        component = <StudentProfile/>
    }
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    {component}
                </CardContent>
            </Card>
        </div>
    )
}