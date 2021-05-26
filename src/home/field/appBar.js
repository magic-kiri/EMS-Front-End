

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        marginRight: theme.spacing(2),
        justifyContent: 'flex-end',
        display: 'flex',
    },
}));

export default function MyAppBar(props) {
    const classes = useStyles();

    const { teacherMode, setIsLoggedIn } = props.state;
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    {teacherMode &&
                        <Button color="inherit" > Create a New Viva</Button>}
                    <Button color="inherit" >Home</Button>
                    <Button color="inherit" > Profile</Button>
                    <Button color="inherit" onClick={() => setIsLoggedIn(false)}>Log Out</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}