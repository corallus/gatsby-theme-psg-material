import React from 'react'
import Act from '../Act';
import {lineupParams} from "../../params";
import { Grid, Typography } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
        },
    }),
);
const Stage = ({highlighted = 2, numItems = null, acts}) => {
    const classes = useStyles();
    return (
        acts && acts.length
            ?
            <Grid className={classes.root} container spacing={3} justifyContent={'center'}>
                {acts.slice(0, highlighted).map((act, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Act act={act}/>
                    </Grid>
                ))}
                {acts.slice(highlighted, numItems ? numItems : acts.length).map((act, index) => (
                    <Grid item xs={12} sm={4} md={4} key={index}>
                        <Act act={act}/>
                    </Grid>
                ))}
            </Grid>
            :
            <Typography>{lineupParams.emptyText}</Typography>
    )
}

export default Stage

