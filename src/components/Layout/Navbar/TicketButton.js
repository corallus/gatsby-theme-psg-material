import React from 'react'
import Button from '@mui/material/Button'


const TicketButton = (props) => {
    return (
        <Button
            {...props}
            size={'large'}
            sx={{
                display: {xs: 'none', sm: 'none', md: 'inline-block' }
            }}
        >
            {props.children}
        </Button>
    )
}


export default TicketButton