import React from 'react'
import {Badge, Chip, Grid, Typography} from "@mui/material";

const Price = ({ticket, earlyBird}) => {
    const currentPrice = (earlyBird && ticket.price_early) ? ticket.price_early : ticket.price
    const priceSplit = (currentPrice ? (earlyBird ? ticket.price_early : ticket.price).toFixed(2).split('.') : null)
    return (
        <Grid>
            {earlyBird &&
            <Grid item>
                <Badge
                    color="secondary"
                    variant="dot"
                    badgeContent={'Early bird'}
                >
                    <Typography>
                        <del>{ticket.price}</del>
                    </Typography>
                </Badge>
                <Chip variant={"danger"}>EARLY BIRD</Chip>
            </Grid>
            }
            {ticket.price &&
            <Grid item>
                <Typography>
                    €{priceSplit[0]}<span>{priceSplit[1]}</span>
                </Typography>
            </Grid>
            }
        </Grid>
    )
}

export default Price

