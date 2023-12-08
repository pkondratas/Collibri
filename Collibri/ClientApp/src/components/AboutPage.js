import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Header from "./Header";
import {useState} from "react";
import {AppBar, Avatar, Tabs, Typography} from "@mui/material";
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
                <TabPanel value={value} index={2}>{Reviews()}</TabPanel>
            
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
            <Typography sx={{...tabStyles.mainTabs, fontSize : '1.8rem'}} variant={"h6"}>Colibri is a no-frills restricted-access website created for a university course project, specializing in sharing notes for various courses. It was initiated in 2023 to meet the requirements of the course project, aiming to provide a straightforward and user-friendly platform for students.
                <Box mb={4} />
                Focusing on the practical need for note-sharing, Colibri serves as a hub where students can easily exchange and access study materials related to different courses. While it may lack the sophistication of larger platforms, Colibri's simplicity is intentional, prioritizing functionality for the benefit of its users in navigating the academic landscape.</Typography>
        </>
        
        
    );
}
export const FAQ = () => {
    return(
        <>
            <Typography sx={{...tabStyles.mainTabs, paddingTop: '3rem',paddingBottom: '3rem'}} variant={"h5"}>Below are some frequently asked questions about Colibri</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>What is Colibri?</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.answer}} variant={"h5"}>Colibri is a student Colaboration website. It's a place where students of all fields can share posts, notes, documents and files with one another.</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>How can I share my notes?</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.answer}} variant={"h5"}>Colibri has a room-section-posts system. To upload content(document, file, image), you must be in a designated room, have selected a certain section and add a post. In the post you can add a small note, a larger document, or even upload photos or files!</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>How do I invite others to view or collaborate on my notes?</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.answer}} variant={"h5"}>Other people can see your notes if they join your room. All they need is to click join room and input the code of said room.</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>What file formats are supported for uploading?</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.answer}} variant={"h5"}>You can upload any format file, however it has to be under 15 MB</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>Is there a search feature to find specific information? </Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.answer}} variant={"h5"}>Yes! there is a search bar above posts where you can find the types of posts that interest you.</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.question}} variant={"h4"}>How can I recover my account if I forget my password?</Typography>
            <Typography sx={{...tabStyles.mainTabs, ...tabStyles.answer}} variant={"h5"}>All you need to do is press the forget password button and follow the instructions.</Typography>
        </>
        
    )
}
export const Reviews = () => {
    return(
        <>
            <Box sx={{...tabStyles.reviews, mt: '3rem'}}> 
                <Box sx={tabStyles.commentBox}>
                    <Avatar sx={{ bgcolor: 'orange', height: 50, width: 50 }}>DK</Avatar>
                    <Typography sx={tabStyles.comments} >"The best website i have ever seen"</Typography>
                
                </Box>
                <Box sx={tabStyles.commentBox}>
                    <Avatar sx={{ bgcolor: 'turquoise', height: 50, width: 50 }}>MM</Avatar>
                    <Typography sx={tabStyles.comments}>"I really enjoy using this website, im going to recommend it to all my friends"</Typography>
                </Box> 
                
                <Box sx={tabStyles.commentBox}>
                    <Avatar sx={{ bgcolor: 'red', height: 50, width: 50 }}>JV</Avatar>
                    <Typography sx={tabStyles.comments}>"I enjoy using [Website Name] for its functionality, but a dark mode option would be a great addition. It's easier on the eyes during late-night study sessions. Hoping the developers consider this for future updates!"
                    </Typography>
                </Box>
                
                <Box sx={tabStyles.commentBox}>
                    <Avatar sx={{ bgcolor: 'red', height: 50, width: 50 }}>GPT</Avatar>
                    <Typography sx={tabStyles.comments}>"Colibri is a fantastic platform for note-sharing, but it would be even better with a dedicated mobile app. Having on-the-go access to my notes would be incredibly convenient. Hope to see this feature in the future!"
                    </Typography>
                </Box>
            
            
            </Box>
           
        </>
    );
}