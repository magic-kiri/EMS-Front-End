
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: '#edfff8',
        // border: '0.1px solid #000',
        boxShadow: theme.shadows[2],
        // flexGrow: 1,
        height: '15vh',
        // backgroundColor: 'red',
        // backgroundColor: 'green',
        // flexDirection: 'column-reverse',
    },
    packet: {
        
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    button: {
        // height: '100%',
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        justifyContent: 'center'
    }


}));



export default function BottomNavbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.packet}>

                <div className={classes.button}>
                    <TextField
                        required fullWidth label='Question' autoFocus
                        onChange={(event) => (event.currentTarget.value)}
                    />
                    <Button variant="contained" color="primary" >Add</Button>
                </div>
            </div>


        </div>
    )
}
