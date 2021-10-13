import React, {useContext, useState} from 'react'
import {Dialog, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {PlayCircleOutline} from "@mui/icons-material";
import Context from "gatsby-theme-psg/src/components/Events/Context";
import useStyles from "./style";
import Section from "../../../components/Section";

const Aftermovie = ({children, ...props}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const {state} = useContext(Context)

    return (
        <Section classes={classes}>
            <IconButton onClick={() => setOpen(true)} size="large">
                <PlayCircleOutline className={classes.icon} />
            </IconButton>
            <Typography className={classes.text}>
                Bekijk de aftermovie
            </Typography>
            <Dialog onClose={() => setOpen(false)} aria-labelledby="aftermovie-dialog" open={open}>
                {state.event.frontmatter.aftermovie &&
                <iframe width="560" height="315" src={`${state.event.frontmatter.aftermovie.replace('watch?v=', 'embed/')}?autoplay=1`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
                }
            </Dialog>
        </Section>
    );
}

export default Aftermovie;