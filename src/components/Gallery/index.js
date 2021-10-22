import React from 'react'
import {Grid} from "@mui/material";
import GalleryItem from "./item";

const Gallery = ({data}) => {
    const galleries = data.markdownRemark.frontmatter.galleries

    if (!galleries) return <></>

    const length = galleries.length
    const pageSize = 3
    const pages = Math.ceil(length/pageSize)

    return (
        <>
            {[...Array(pages)].map((e, i) =>
                //<Component key={i} items={items.slice(i*pageSize, (i+1) * (pageSize))} />
                <Grid direction={i%2===0 ? 'row': 'row-reverse'} container spacing={3} key={i}>
                    <Grid xs={12} md={8} item>
                        <Gallery
                            data={galleries[i*pageSize]}
                        />
                    </Grid>
                    {length > i * pageSize + 1 &&
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={3} key={i}>
                            <Grid xs={12} item>
                                <GalleryItem
                                    data={galleries[i*pageSize+1]}
                                />
                            </Grid>
                            {length > i * pageSize + 2 &&
                            <Grid xs={12} item>
                                <GalleryItem
                                    data={galleries[i*pageSize+2]}
                                />
                            </Grid>
                            }
                        </Grid>
                    </Grid>
                    }
                </Grid>
            )}
        </>
    )
}

export default Gallery