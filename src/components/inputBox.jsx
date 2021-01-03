import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';


const usestyles = makeStyles((theme) => ({

        root: {
            padding:(10,10,10,10) ,
            
        }

    }));
export default function inputBox(props) {
    

    const classes = usestyles();
    return (
        <div>
            <Grid container direction="column" alignContent="center" justify="center" className={classes.root}>
            <TextField label={props.name} type={props.type}  >
                
                </TextField>
                </Grid>
        </div>
    )
}