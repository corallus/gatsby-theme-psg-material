import React from 'react'
import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import SocialButton from "./SocialButton";
import {FacebookIcon, InstagramIcon} from "./Icons";

const SocialMenu = (props) => {
    const {social} = useSiteMetadata()
    return <>
        {social.facebook &&
        <SocialButton
            aria-label="facebook"
            href={social.facebook}
            rel="noopener noreferrer"
            target="_blank"
            {...props}
        >
            <FacebookIcon fontSize='large' color={'inherit'} />
        </SocialButton>
        }
        {social.instagram &&
        <SocialButton
            href={social.instagram}
            aria-label="facebook"
            rel="noopener noreferrer"
            target="_blank"
            {...props}
        >
            <InstagramIcon fontSize={'large'} color={'inherit'} />
        </SocialButton>
        }
    </>
}

export default SocialMenu