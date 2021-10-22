import React from 'react'
import Act from '../Act';
import {lineupParams} from "gatsby-theme-psg/src/params";
import { Grid, Typography } from "@mui/material";


const Stage = ({highlighted = 2, numItems = null, acts}) => {
    return (
        acts && acts.length
            ?
            <Grid container spacing={3} justifyContent={'center'}>
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

