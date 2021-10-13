import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import Viewport from './viewport';
import {EventProvider} from "gatsby-theme-psg/src/components/Events/Context";

export default function TopLayout({ children, theme }) {
    return <>
        <Viewport />
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