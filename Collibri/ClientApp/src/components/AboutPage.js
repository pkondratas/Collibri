import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Header from "./Header";
import {useState} from "react";
import {AppBar, Tabs, Typography} from "@mui/material";
import tabStyles from "../styles/TabStyles";

export default function AboutPage()  {
    const [value, setValue] = useState(0); // Assuming you want the default value to be 0 for "item 1"

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper>
                <Header />
            </Paper>
            <Box>
                <Tabs value={value} onChange={handleChange} centered  >
                    <Tab sx={{ fontSize : '2rem', minWidth:"20%"}} label="About Colibri" />
                    <Tab sx={{ fontSize : '2rem', minWidth:"20%"}} label="FAQ" />
                    <Tab sx={{ fontSize : '2rem', minWidth:"20%"}} label="Reviews" />
                </Tabs>
            </Box>   
                <TabPanel value={value} index={0}>{aboutTab()}</TabPanel>
                <TabPanel value={value} index={1}>{FAQ()}</TabPanel>
                <TabPanel value={value} index={2}> item 3</TabPanel>
            
        </>
    );
}

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <Box>
            {value === index && (<h1>{children}</h1>)}
        </Box>
    );
}

export const aboutTab = () =>{
    
    return(
        <>
            <Typography align='center' sx={{...tabStyles.mainTabs, paddingTop: '3rem'}} variant={"h4"}>Colibri: Where knowledge takes flight.</Typography>
            <Box mb={4} />
            <Typography sx={tabStyles.mainTabs} variant={"h6"}>Colibri is a no-frills restricted-access website created for a university course project, specializing in sharing notes for various courses. It was initiated in 2023 to meet the requirements of the course project, aiming to provide a straightforward and user-friendly platform for students.
                <Box mb={4} />
                Focusing on the practical need for note-sharing, Colibri serves as a hub where students can easily exchange and access study materials related to different courses. While it may lack the sophistication of larger platforms, Colibri's simplicity is intentional, prioritizing functionality for the benefit of its users in navigating the academic landscape.</Typography>
        </>
        
        
    );
}
export const FAQ = () => {
    return(
        <>
            <Typography sx={{...tabStyles.mainTabs, paddingTop: '3rem',paddingBottom: '3rem'}} variant={"h5"}>Below is some useful information to help you get started with the features available on Colibri</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>What is Colibri?</Typography>
            <Typography sx={{...tabStyles.mainTabs}} variant={"h5"}>Colibri is a student Colaboration website. It's a place where students of all fields can share posts, notes, documents and files with one another.</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>How can I share my notes on Colibri?</Typography>
            <Typography sx={{...tabStyles.mainTabs}} variant={"h5"}>Colibri has a room-section-posts system. To upload content(document, file, image), you must be in a designated room, have selected a certain section and add a post. In the post you can add a small note, a larger document, or even upload photos or files!</Typography>
            
            
            
        </>
        
    )
}