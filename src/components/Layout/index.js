import React from 'react'
import {Helmet} from 'react-helmet'
import Footer from './Footer/index'
import Navbar from './Navbar/index'
import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import CookieConsent from "react-cookie-consent"
import {globalHistory} from "@reach/router"
import NewsFlash from "../NewsFlash";
import EventMeta from "../EventMeta";
import useStyles from "./style";

const Layout = ({title: pageTitle = null, description, template = null, children}) => {
    const classes = useStyles();
    const {title} = useSiteMetadata()
    const isHome = globalHistory.location.pathname === '/'

    return (
        <div className={classes.root}>
            <Helmet
                bodyAttributes={{
                    class: (template ? template : '')
                }}
                htmlAttributes={{
                    lang: 'nl',
                }}
            >
                <title>{pageTitle}</title>
                <meta name="description" content={description}/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <meta property="og:title" content={title}/>
                <meta property="og:url" content="/"/>
            </Helmet>
            <EventMeta />
            <Navbar isHome={isHome}/>
            <div className={classes.appBarSpacer} />
            {children}
            <NewsFlash />
            <footer className={classes.footer}>
                <Footer />
            </footer>
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
        </div>
    )
}

export default Layout
