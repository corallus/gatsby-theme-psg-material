import React, {useContext} from "react";
import {Link} from "gatsby";
import {List, ListItem, ListItemText} from "@mui/material";

import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import Context from "gatsby-theme-psg/src/components/Events/Context";

const ExternalLink = ({name, href}) => {
    return (
        <li>
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
        </li>
    )
}

const PrimaryMenu = ({handleClose, ...props}) => {
    const {menuItems} = useSiteMetadata()
    const {state} = useContext(Context)
    const {event} = state
    return (
        <List>
            {menuItems.map((item, i) => (
                item.external ?
                    <ExternalLink
                        href={item.link}
                        name={item.name}
                        key={i}
                    />
                    :
                    <li key={i}>
                        <ListItem
                            button
                            component={Link}
                            to={item.link}
                            size={"large"}
                            onClick={handleClose}
                            key={i}
                        >
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItem>
                    </li>
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
