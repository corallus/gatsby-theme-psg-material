import React from 'react'
import {Badge, Chip, Grid, Typography} from "@mui/material";
import useStyles from './style'

const Price = ({ticket, earlyBird}) => {
    const classes = useStyles();

    const currentPrice = (earlyBird && ticket.price_early) ? ticket.price_early : ticket.price
    const priceSplit = (currentPrice ? (earlyBird ? ticket.price_early : ticket.price).toFixed(2).split('.') : null)
    return (
        <Grid className={classes.root}>
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
                <Typography variant={'h2'} className={classes.price}>
                    €{priceSplit[0]}<span className={classes.decimals}>{priceSplit[1]}</span>
                </Typography>
            </Grid>
            }
        </Grid>
    )
}

export default Price

