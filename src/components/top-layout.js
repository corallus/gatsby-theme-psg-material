import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import {Helmet} from "react-helmet";

import {EventProvider} from "gatsby-theme-psg/src/components/Events/Context";

import Viewport from './viewport';

export default function TopLayout({ children, theme }) {
    return <>
        <Helmet
            htmlAttributes={{
                lang: 'nl',
            }}
        >
            <Viewport />
        </Helmet>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <EventProvider>
                    {children}
                </EventProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    </>;
}