import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import Viewport from './viewport';
import {EventProvider} from "gatsby-theme-psg/src/components/Events/Context";
import {Helmet} from "react-helmet";

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