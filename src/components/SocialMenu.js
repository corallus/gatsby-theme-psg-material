import React from 'react'
import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import SocialButton from "./SocialButton";
import {Facebook, Instagram} from "@mui/icons-material";

const SocialMenu = () => {
    const {social} = useSiteMetadata()
    return <>
        {social.facebook &&
        <SocialButton
            aria-label="facebook"
            href={social.facebook}
        >
            <Facebook size='inherit' color={'inherit'} />
        </SocialButton>
        }
        {social.instagram &&
        <SocialButton
            href={social.instagram}
            aria-label="facebook"
        >
            <Instagram size={'inherit'} color={'inherit'} />
        </SocialButton>
        }
    </>
}

export default SocialMenu