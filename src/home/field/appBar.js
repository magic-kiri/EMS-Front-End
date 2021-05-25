

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    rightSide: {
        marginRight: theme.spacing(3),
    }
}));

export default function MyAppBar(props) {
    const classes = useStyles();
    
    const {teacherMode,setIsLoggedIn} = props.state;
    let leftValue = "75%";

    if(teacherMode)
        leftValue = "65%";
    
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    { teacherMode &&
                        <Button color="inherit" style = {{left: leftValue}} className={classes.rightSide}> Create a New Viva</Button>}
                    <Button color="inherit" style = {{left: leftValue}} className={classes.rightSide}>Home</Button>
                    <Button color="inherit" style = {{left: leftValue}} className={classes.rightSide}> Profile</Button>
                    <Button color="inherit" style = {{left: leftValue}} className={classes.rightSide} onClick={() => setIsLoggedIn(false)}>Log Out</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}