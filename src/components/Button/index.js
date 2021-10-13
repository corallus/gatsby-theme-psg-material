import React from 'react'
import {Button} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";
import useStyles from './style'

export default ({children, ...props}) => {
    const classes = useStyles();
    return (
        <Button
            endIcon={<ArrowForward/>}
            className={classes.root}
            {...props}
        >
            {children}
        </Button>
    )
}
