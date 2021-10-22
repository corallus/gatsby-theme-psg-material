import React from 'react'
import {Card, CardHeader, CardMedia } from "@mui/material";
import ActImage from "gatsby-theme-psg/src/components/Act/Image";
import {renderTitle} from "gatsby-theme-psg/src/components/Act/utils";

const Act = ({act}) => {

    return (
        <Card>
            <CardHeader
                title={renderTitle(act)}
            />
            <CardMedia>
                {act.announced &&
                    <ActImage act={act} />
                }
            </CardMedia>
        </Card>
    );
}

export default Act
