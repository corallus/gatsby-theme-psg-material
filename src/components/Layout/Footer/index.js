import React from 'react'
import {Container, Typography} from "@mui/material";
import Copyright from "gatsby-theme-psg/src/components/Copyright";
import Logo from "gatsby-theme-psg/src/components/Logo";

import Menu from "./Menu";
import SocialMenu from "../../SocialMenu";

const Footer = () => {
    return (
        <>
            <Container maxWidth={'lg'}>
                <Logo />
                <Menu />
                <SocialMenu />
                <Typography variant="body2" color="text.secondary">
                    <Copyright />
                </Typography>
            </Container>
        </>
    )
}

export default Footer
