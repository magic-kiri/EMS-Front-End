import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        height: '10vh',
        flexGrow: 1,
    },
    toolbar: {
        marginRight: theme.spacing(2),
        justifyContent: 'flex-end',
        display: 'flex',
    }
}));

export default function MyAppBar(props) {
    const classes = useStyles();
    
    const { teacherMode, setIsLoggedIn,setPage,setVivaModal} = props.state;
    function logOut(){
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('teacherMode');
        setIsLoggedIn(false);
    }
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className="fixed-top">
                <Toolbar className={classes.toolbar}>
                    {teacherMode &&
                    <Button color="inherit" onClick={(event)=>setVivaModal(true)}> Create a New Viva</Button>}
                    <Button color="inherit" onClick={(event)=>setPage('home')} >Home</Button>
                    <Button color="inherit" onClick={(event)=>setPage('profile')}> Profile</Button>
                    <Button color="inherit" onClick={(event)=> logOut()}>Log Out</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}