import React from 'react';
import { styled } from '@mui/material/styles';
import {Link} from 'gatsby';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import {Box, Hidden} from "@mui/material";
import Logo from "gatsby-theme-psg/src/components/Logo";
import EventToggler from "./EventSwitcher";
import {Close} from "@mui/icons-material";
import PrimaryMenu from "./Menu";
import TicketButton from "./TicketButton"
import {navbarParams} from "gatsby-theme-psg/src/params";
import SocialMenu from "../../Social/SocialMenu";
import MenuButton from "./MenuButton";
import AppBar from "./AppBar";
import CloseButton from "./CloseButton";

const PREFIX = 'navbar';

export const drawerWidth = 240;

const classes = {
    toolbar: `${PREFIX}-toolbar`,
    menuAndEventToggler: `${PREFIX}-menuAndEventToggler`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({theme}) => ({
    [`& .${classes.toolbar}`]: {
        justifyContent: 'space-between'
    },

    [`& .${classes.menuAndEventToggler}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },

}));

export default function Index() {

    const {title} = useSiteMetadata()

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Root>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: theme => theme.zIndex.drawer - 1,
                    transition: theme => theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                <Toolbar
                    className={classes.toolbar}
                >
                    <div className={classes.menuAndEventToggler}>
                        <MenuButton
                            color="inherit"
                            aria-label="open menu"
                            size={'large'}
                            onClick={handleDrawerOpen}
                            sx={{
                                ...(open ? {display: 'none'} : {})
                            }}
                            startIcon={<MenuIcon color={'inherit'}/>}
                        >
                            <Box
                                component={'span'}
                                sx={{ display: { xs: 'none', md: 'block' } }}
                            >
                                menu
                            </Box>
                        </MenuButton>
                        <Box component={EventToggler} sx={{ display: { xs: 'none', md: 'block' } }}/>
                    </div>
                    <Box component={'div'}
                         sx={{
                             position: 'absolute',
                             left: '50%',
                             transform: 'translateX(-50%)'
                         }}
                    >
                        <Logo title={title}/>
                    </Box>
                    <Box
                        sx={{
                            display: {xs: 'none', sm: 'none', md: 'inline-block' }
                        }}
                    >
                        <SocialMenu size={'large'} />
                        <TicketButton
                            component={Link}
                            to={'/tickets'}
                        >
                            {navbarParams.ticketButton.text}
                        </TicketButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={open}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        width: {xs: '100%', sm: drawerWidth},
                        transition: theme => theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    }
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.menuAndEventToggler}>
                    <EventToggler/>
                    <CloseButton onClick={handleDrawerClose} size="large">
                        <Close color={'inherit'} />
                    </CloseButton>
                </div>
                <div className={classes.toolbar} />
                <PrimaryMenu handleClose={handleDrawerClose} />
                <Box
                    sx={{
                        display: {xs: 'inline-block', md: 'none' }
                    }}
                >
                    <SocialMenu />
                </Box>
            </Drawer>
        </Root>
    );
}

