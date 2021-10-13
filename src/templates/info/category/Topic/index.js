import React from 'react';
import {graphql} from 'gatsby'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Typography, Accordion } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import MuiAccordionSummary from "@mui/material/AccordionSummary";

const AccordionSummary = withStyles({
    root: {
    },
    content: {
    },
    expanded: {

    },
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) =>
    createStyles({
            root: {
                width: '100%',
            },
            content: {
                textAlign: 'left',
                '& a': {
                    color: theme.palette.primary.main
                }
            }
        }
    ))
export default ({item, index, expanded, handleChange}) => {
    const classes = useStyles();
    return (
        <Accordion
            className={classes.root}
            expanded={expanded}
            onChange={handleChange}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
            >
                <Typography>{item.frontmatter.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.content}>
                <div dangerouslySetInnerHTML={{__html: item.html}} />
            </AccordionDetails>

        </Accordion>
    )
}

export const query = graphql`
    fragment Topic on MarkdownRemark {
        html
        excerpt(pruneLength: 400)
        id
        fields {
            slug
        }
        frontmatter {
            order
            title
            category
            templateKey
            events {
                id
            }
        }
    }
`
