import React from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Typography, Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";

export default ({item, index, expanded, handleChange}) => {
    return (
        <Accordion
            expanded={expanded}
            onChange={handleChange}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
            >
                <Typography variant={'h5'}>
                    {item.frontmatter.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    textAlign: 'left'
                }}
                dangerouslySetInnerHTML={{__html: item.html}}
            />
        </Accordion>
    )
}