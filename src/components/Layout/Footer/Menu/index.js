import React, {useContext} from "react";
import {List} from "@mui/material";
import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import Context from "gatsby-theme-psg/src/components/Events/Context";
import {Link} from "gatsby";
import ListItemText from "./ListItemText";
import ListItemButton from "./ListItemButton";

const ExternalLink = ({name, href}) => {
    return (
        <ListItemButton
            href={href}
            rel="noopener noreferrer"
            target="_blank"
        >
            <ListItemText>
                {name}
            </ListItemText>
        </ListItemButton>
    )
}

const Menu = () => {
    const {menuItems} = useSiteMetadata()
    const {state} = useContext(Context)
    const {event} = state

    return (
        <List
            sx={{
                display: {sm: 'flex'},
                flexDirection: {sm: 'row'},
                justifyContent: {sm: "center"},
                margin: {sm: '0 auto !important'},
            }}
        >
            {menuItems.map((item, i) => (
                item.external ?
                    <ExternalLink
                        href={item.link}
                        name={item.name}
                        key={i}
                    />
                    :
                    <ListItemButton
                        component={Link}
                        to={item.link}
                        key={i}
                    >
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItemButton>
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

export default Menu
