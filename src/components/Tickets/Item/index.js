import React from 'react'
import showdown from 'showdown'
import {Link} from "gatsby";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Button
} from "@mui/material";

import {ticketParams} from "gatsby-theme-psg/src/params";
import Price from './Price'

const converter = new showdown.Converter()

const Ticket = ({ticket, early_bird}) => {

    return (
        <Card>
            <CardHeader
                title={ticket.title}
            />
            <CardContent>
                <Price ticket={ticket} earlyBird={early_bird}/>
                <div dangerouslySetInnerHTML={{__html: converter.makeHtml(ticket.body)}} />
            </CardContent>
            {ticket.price &&
            <CardActions>
                <Button component={Link} to={'/tickets'}>
                    {ticketParams.button.text}
                </Button>
            </CardActions>
            }
        </Card>
    )
}

export default Ticket
