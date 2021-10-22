import React from 'react'
import {
    Grid,
} from "@mui/material";
import Topic from './Item'
import useInfo from "gatsby-theme-psg/src/components/Info/hook";

export default ({items}) => {

    const posts = useInfo(items)

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid container spacing={3}>
            <Grid item md={6}>
                {posts.map((item, i) => (
                    i % 2 === 0 &&
                    <Topic
                        expanded={expanded === i}
                        index={i}
                        item={item}
                        key={i}
                        handleChange={handleChange(i)}
                    />
                ))}
            </Grid>
            <Grid item md={6}>
                {posts.map((item, i) => (
                    i % 2 !== 0 &&
                    <Topic
                        expanded={expanded === i}
                        index={i}
                        key={i}
                        item={item}
                        handleChange={handleChange(i)}
                    />
                ))}
            </Grid>
        </Grid>
    )
}
