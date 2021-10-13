import React from 'react'
import {Box} from "@mui/material";
import useStyles from "./style";
import Summary from "./summary";

const HomeHeader = ({showText=false}) => {
    const classes = useStyles();
    return (
        <Box component={'header'} className={classes.root}>
            <Summary showText={showText} />
        </Box>
    )
}

export default HomeHeader
