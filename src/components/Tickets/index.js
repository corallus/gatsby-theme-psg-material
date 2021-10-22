import React from 'react'
import {Grid, Typography } from "@mui/material";

import {Slide} from "../../shared/slide";
import Ticket from "./Item";
import {ticketParams} from "gatsby-theme-psg/src/params";
import useWidth from "../../shared/useWidth";
import useTickets from "gatsby-theme-psg/src/components/Tickets/hook";


const TicketsHome = () => {
    const width = useWidth();
    const pageSizes = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4
    }
    const pageSize = pageSizes[width]

    const [earlyBird, tickets] = useTickets()

    const Row = ({items}) => {
        return (
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
            >
                {items.map((ticket, j) => (
                    <Grid xs={12/pageSizes['xs']} sm={12/pageSizes['sm']} md={12/pageSizes['md']} lg={12/pageSizes['lg']} xl={12/pageSizes['xl']} item key={j}>
                        <Ticket ticket={ticket} early_bird={earlyBird && ticket.price_early} />
                    </Grid>
                ))}
            </Grid>
        )
    }
    return (
        tickets ?
            <Slide pageSize={pageSize} items={tickets} Component={Row} />
            :
            <Typography>{ticketParams.emptyText}</Typography>
    )
}

export default TicketsHome