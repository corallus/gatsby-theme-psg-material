import React, {useContext} from 'react'
import {Box, Tab, Tabs} from "@mui/material";

import Context from 'gatsby-theme-psg/src/components/Events/Context'
import {lineupParams} from "gatsby-theme-psg/src/params";

import Stage from '../Stage'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Lineup = ({highlighted = 2, numItems = null}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {state} = useContext(Context)
    const {event} = state
    const {stages} = event.frontmatter

    return (
        stages && stages.length > 1 ?
            <>
                <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
                    {stages.map((stage, index) => (
                        <Tab label={stage.name} key={index} {...a11yProps(index)} />
                    ))
                    }
                </Tabs>
                {stages.map((stage, index) => (
                    <TabPanel key={index} value={value} index={index}>
                        <Stage highlighted={highlighted} numItems={numItems} acts={stage.acts}/>
                    </TabPanel>
                ))
                }
            </>
            :
            stages && stages.length > 0 ?
                <Stage highlighted={highlighted} numItems={numItems} acts={stages[0].acts}/>
                :
                <h3 className="text-center">{lineupParams.emptyText}</h3>
    )
}

export default Lineup

