import React from 'react'
import Button from '@mui/material/Button'


const TicketButton = (props) => {
    return (
        <Button
            {...props}
            size={'large'}
        >
            {props.children}
        </Button>
    )
}


export default TicketButton