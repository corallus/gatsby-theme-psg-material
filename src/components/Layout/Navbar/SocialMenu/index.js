import React from 'react'
import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import IconButton from "@mui/material/IconButton";
import {Facebook, Instagram} from "@mui/icons-material";
import useStyles from "./style";

const SocialMenu = () => {
    const classes = useStyles();
    const {social} = useSiteMetadata()
    return <>
        {social.facebook &&
        <IconButton
            className={classes.iconButton}
            aria-label="facebook"
            color="inherit"
            size="large">
            <Facebook size='inherit' color={'inherit'} />
        </IconButton>
        }
        {social.instagram &&
        <IconButton
            className={classes.iconButton}
            aria-label="instagram"
            color="inherit"
            size="large">
            <Instagram size={'inherit'} color={'inherit'} />
        </IconButton>
        }
    </>;
}

export default SocialMenu