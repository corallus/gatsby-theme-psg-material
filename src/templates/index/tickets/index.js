import React, {useContext, useEffect, useState} from 'react'
import moment from "moment";
import { Grid } from "@mui/material";
import {Slide} from "../../../shared/slide";
import Ticket from "../../../components/Ticket";
import Section from "../../../components/Section";
import {ticketParams} from "../../../params";
import Context from "gatsby-theme-psg/src/components/Events/Context";
import useStyles from "./style";

// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
const withWidth = () => (WrappedComponent) => (props) => <WrappedComponent {...props} width="xs" />;

const TicketsHome = (props) => {
    const classes = useStyles()

    const pageSizes = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4
    }
    const pageSize = pageSizes[props.width]

    const {state} = useContext(Context)
    const {event} = state
    const tickets = event.frontmatter.tickets

    const [earlyBird, setEarlyBird] = useState(false)

    useEffect(() => {
        setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
    }, [event.frontmatter.early_bird])

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
        <Section classes={classes} title={'Tickets'} link={'/tickets'} linkName={'Alle tickets'}>
            {tickets ?
                <Slide pageSize={pageSize} items={tickets} Component={Row} />
                :
                <h3 className="text-center">{ticketParams.emptyText}</h3>
            }
        </Section>
    )
}

export default withWidth()(TicketsHome)