import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2faf5',
        border: '0.5px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: 600,
        minHeight: 500,
    },
    title: {
        // flex:'center',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Times'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Times'
    },
}));

export default function ExamModal(props) {
    const classes = useStyles();
    const { open, setOpen } = props.state;
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 900,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography className={classes.title}> {'Create New Viva'} <br/> </Typography>
                        <br/>
                        {/* <Typography> Create New Viva </Typography> */}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
