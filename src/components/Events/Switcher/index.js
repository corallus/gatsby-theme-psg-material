import React, {useContext} from 'react'
import Context from 'gatsby-theme-psg/src/components/Events/Context';
import {Button, ButtonGroup, Hidden} from "@material-ui/core";

export default () => {
    const {state, dispatch} = useContext(Context)
    return (
        <>
            {state.events.length > 1 &&
            <ButtonGroup color="primary" variant={'contained'} aria-label="event-selector">
                {state.events.map(post => (
                    <Button
                        onClick={() => dispatch({type: 'changeEvent', payload: post})}
                        event={post}
                        key={post.id}
                    >
                        {post.frontmatter.dateShort} <Hidden smDown>{post.frontmatter.name}</Hidden>
                    </Button>
                ))}
            </ButtonGroup>
            }
        </>
    )
}