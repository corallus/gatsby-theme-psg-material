import React from 'react'
import Button from '@mui/material/Button'

import {navbarParams} from "gatsby-theme-psg/src/params";


const TicketButton = () => {
    return (
        <Button>
            {navbarParams.ticketButton.text}
        </Button>
    )
}


export default TicketButton