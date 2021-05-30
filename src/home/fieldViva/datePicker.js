
import 'date-fns';
import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';



function DateComponent(props) {
   
    const { selectedDate, handleDateChange } = props.state;
    return (

        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }} />
    )
}

function TimeComponent(props) {
    const { selectedDate, handleDateChange } = props.state;
    return (

        <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change time',
            }} />
    )
}
export default function DatePicker() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const state = {
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
        handleDateChange: handleDateChange,
    }
    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <DateComponent state={state} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TimeComponent state={state} />
                    </Grid>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>



    );
}