import React, {useState} from 'react';
import {ArrowLeft, ArrowRight} from "@mui/icons-material";
import {
    Box,
    IconButton
} from '@mui/material'

export const Slide = ({pageSize, items, Component}) => {

   const [currentPage, setCurrentPage] = useState(1)

    const pages = Math.ceil(items.length/pageSize)

    return (
        <Box
            display={'flex'}
            flexDirection={'row'}
        >
            {currentPage > 1 &&
            <IconButton
                onClick={() => setCurrentPage(page => page-1)}
            >
                <ArrowLeft/>
            </IconButton>
            }
            {[...Array(pages)].map((e, i) =>
                i + 1 === currentPage &&
                <Component key={i} items={items.slice(i*pageSize, (i+1) * (pageSize))} />
            )}
            {currentPage < pages &&
            <IconButton
                onClick={() => setCurrentPage(page => page+1)}
            >
                <ArrowRight/>
            </IconButton>
            }
        </Box>
    )
}