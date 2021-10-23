import React from 'react'
import {globalHistory} from "@reach/router"
import { styled } from '@mui/material/styles';
import {Box} from "@mui/material";
import CookieConsent from "react-cookie-consent"

import EventMeta from "gatsby-theme-psg/src/components/EventMeta";

import NewsFlash from "../NewsFlash";
import Footer from './Footer/index'
import Navbar from './Navbar/index'
import cookiePolicy from 'gatsby-theme-psg/src/assets/cookie-policy.pdf'

const PREFIX = 'Layout';

const classes = {
    appBarSpacer: `${PREFIX}-appBarSpacer`,
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.appBarSpacer}`]: theme.mixins.toolbar,
}));

const Layout = ({children}) => {

    const isHome = globalHistory.location.pathname === '/'

    return (
        <Box
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
                <small>Wij gebruiken cookies volgens onze <a href={cookiePolicy}>Cookie Policy</a></small>
            </CookieConsent>
        </Box>
    );
}

export default Layout
