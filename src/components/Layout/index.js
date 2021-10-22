import React from 'react'
import { styled } from '@mui/material/styles';
import Footer from './Footer/index'
import Navbar from './Navbar/index'
import CookieConsent from "react-cookie-consent"
import {globalHistory} from "@reach/router"
import NewsFlash from "../NewsFlash";
import EventMeta from "gatsby-theme-psg/src/components/EventMeta";
import {Box} from "@mui/material";

const PREFIX = 'Layout';

const classes = {
    root: `${PREFIX}-root`,
    appBarSpacer: `${PREFIX}-appBarSpacer`,
    footer: `${PREFIX}-footer`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
    },

    [`& .${classes.appBarSpacer}`]: theme.mixins.toolbar,

    [`& .${classes.footer}`]: {
    }
}));

const Layout = ({children}) => {

    const isHome = globalHistory.location.pathname === '/'

    return (
        <Root
            className={classes.root}
            sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <EventMeta />
            <Navbar isHome={isHome}/>
            <div className={classes.appBarSpacer} />
            {children}
            <NewsFlash />
            <Box component={'footer'}
                sx={{
                    marginTop: 'auto',
                }}
            >
                <Footer />
            </Box>
            <CookieConsent
                enableDeclineButton
                declineButtonText="Weigeren"
                declineButtonClasses="btn btn-sm btn-danger"
                buttonClasses="btn btn-sm btn-success"
                buttonStyle={{}}
                declineButtonStyle={{}}
                location="bottom"
                buttonText="Accepteren"
                style={{background: "#2B373B", textAlign: "right"}}
                expires={150}
            >
                <small>Wij gebruiken cookies volgens onze <a href="/cookie-policy.pdf">Cookie Policy</a></small>
            </CookieConsent>
        </Root>
    );
}

export default Layout
