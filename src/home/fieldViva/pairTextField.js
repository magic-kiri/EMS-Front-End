

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';





function MyTextField(props) {
    return (
        <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined" 
                required fullWidth label={props.label} autoFocus />
        </Grid>
    )
}



function NameTitle(props) {
    const { label1, label2 } = props.myLabel;
    // const {vivaInfo,setVivaInfo} = props;

    return (
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <MyTextField label={label1} />
                <MyTextField label={label2} />
            </Grid>
        </Grid>
    )

}


export default NameTitle;