import React from 'react'
import IconButton from "@mui/material/IconButton";

const SocialButton = ({children, ...props}) => {
    return (
        <IconButton
            size={'large'}
            {...props}
        >
            {children}
        </IconButton>
    )
}

export default SocialButton
