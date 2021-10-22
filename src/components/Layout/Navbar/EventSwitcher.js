import React, {useContext} from 'react'
import Context from 'gatsby-theme-psg/src/components/Events/Context';
import {Button, Menu, MenuItem } from "@mui/material";
import {ArrowDropDown} from "@mui/icons-material";

export default () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {state, dispatch} = useContext(Context)
    const {event, events} = state

    return (
        events.length > 1 &&
        <div>
            <Button
                aria-controls="event-selector"
                aria-haspopup="true"
                onClick={handleClick}
                color={'inherit'}
                endIcon={<ArrowDropDown/>}
            >
                {event.frontmatter.dateShort} {event.frontmatter.name}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {events.map(post => (
                    <MenuItem
                        key={post.id}
                        onClick={() => dispatch({type: 'changeEvent', payload: post})}
                    >
                        {post.frontmatter.dateShort} {post.frontmatter.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}