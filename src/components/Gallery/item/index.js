import React from "react";
import {Card, CardActionArea, CardHeader, CardMedia} from "@mui/material";
import {GatsbyImage} from "gatsby-plugin-image";

const GalleryItem = ({data}) => {
    return (
        <Card>
            <CardActionArea
                href={data.url}
                target={'_blank'}
                style={{display: 'block'}}
            >
                <CardMedia>
                    <GatsbyImage
                        image={data.image.childImageSharp.gatsbyImageData}
                        alt={data.naam}/>
                </CardMedia>
                <CardHeader
                    title={data.naam}
                />
            </CardActionArea>
        </Card>
    )
}
export default GalleryItem
