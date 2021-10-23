import React, {useContext} from "react";
import {Link} from "gatsby";
import {List, ListItem} from "@mui/material";

import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import Context from "gatsby-theme-psg/src/components/Events/Context";

import ListItemText from "./ListItemText";

const ExternalLink = ({name, href}) => {
    return (
            <ListItem
                button
                href={href}
                rel="noopener noreferrer"
                target="_blank"
            >
                <ListItemText>
                    {name}
                </ListItemText>
            </ListItem>
    )
}

const PrimaryMenu = ({handleClose, ...props}) => {
    const {menuItems} = useSiteMetadata()
    const {state} = useContext(Context)
    const {event} = state
    return (
        <List component={'nav'}>
            {menuItems.map((item, i) => (
                item.external ?
                    <ExternalLink
                        href={item.link}
                        name={item.name}
                        key={i}
                    />
                    :
                        <ListItem
                            button
                            component={Link}
                            to={item.link}
                            onClick={handleClose}
                            key={i}
                        >
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItem>
            ))}
            {event.frontmatter.links && event.frontmatter.links.map((item, i) => (
                <ExternalLink
                    href={item.url}
                    name={item.name}
                    key={i}
                />
            ))}
        </List>
    )
}

export default PrimaryMenu
