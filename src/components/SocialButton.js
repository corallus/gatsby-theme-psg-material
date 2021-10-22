import React from 'react'
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const Root = styled(IconButton)(({theme}) => ({
}));

const SocialButton = ({children, ...props}) => {
    return (
        <Root
            color="inherit"
            rel="noopener noreferrer"
            target="_blank"
            {...props}
        >
            {children}
        </Root>
    )
}

export default SocialButton
