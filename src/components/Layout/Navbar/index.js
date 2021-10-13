import React from 'react';
import {Link} from 'gatsby';
import clsx from 'clsx';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MaterialButton from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import {Box, Hidden} from "@mui/material";
import Logo from "./Logo";
import EventToggler from "./Toggler";
import {Close} from "@mui/icons-material";
import PrimaryMenu from "./Menu";
import SocialMenu from "./SocialMenu";
import Button from "./Button"
import useStyles from './style'

export default function Index() {
    const classes = useStyles();
    const {title} = useSiteMetadata()

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return <>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar
                className={classes.toolbar}
            >
                <div className={classes.toolbarIcon}>
                    <MaterialButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        startIcon={<MenuIcon fontSize={'large'}/>}
                    >
                        <Hidden mdDown implementation="css">
                        menu
                        </Hidden>
                    </MaterialButton>
                    <Hidden mdDown implementation="css">
                        <EventToggler/>
                    </Hidden>
                </div>
                <div className={classes.title}>
                    <Logo title={title}/>
                </div>
                <Box className={classes.secondaryMenu}>
                    <SocialMenu />
                    <Box display={{ xs: 'none', sm: 'none', md: 'inline-block' }}>
                        <Button component={Link} to={'/tickets'} variant="outlined"/>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="temporary"
            open={open}
            onClose={handleDrawerClose}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            <div className={classes.toolbarIcon}>
                <EventToggler/>
                <IconButton onClick={handleDrawerClose} size="large">
                    <Close />
                </IconButton>
            </div>
            <div className={classes.toolbar} />
            <PrimaryMenu handleClose={handleDrawerClose} />
            <Hidden mdUp implementation="css">
                <SocialMenu />
            </Hidden>
        </Drawer>
    </>;
}

