import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CreateVivaComponent from './fieldViva/createVivaComponent';


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
    console.log(props.state);
    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}>
                <CreateVivaComponent state={props.state}/>
            </Modal>
        </div>
    );
}
