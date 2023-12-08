import React, {useEffect, useState} from "react";
import {Box, Button, Grid, Paper, Typography} from '@mui/material';
import {useParams} from "react-router-dom";
import Header from "../Header";
import {RoomSettings} from "../RoomSettings";
import {SideRoomTable} from "../SideRooms";
import {AddSection} from "../Buttons/AddSection";
import SectionsContainer from "../Containers/SectionsContainer";
import {UserInfoContainer} from "../Containers/UserInfoContainer";
import {AddPostButton} from "../Buttons/AddPostButton";
import SearchBar from "../SearchBar";
import PostContainer from "../Containers/PostContainer";
import {getSections} from "../../api/SectionApi";
import {RoomLayoutStyle} from "../../styles/RoomLayoutStyle";
import {useSelector} from "react-redux";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {HeaderStyles} from "../../styles/HeaderStyles";


const drawerWidth = 240;

const RoomLayout = () => {
    const [sectionId, setSectionId] = useState(0);
    const [sections, setSections] = useState([]);
    const [posts, setPosts] = useState([]);
    const currentRoom = useSelector((state) => state.rooms.currentRoom);

    useEffect(() => {
        getSections(setSections, currentRoom.id);
    }, [currentRoom.id]);

    return (

        <Grid //container
              direction="row"
              sx={RoomLayoutStyle.grid}
              // justifyContent="space-evenly"
              // alignItems="strech"
        >
            <Grid sx={RoomLayoutStyle.roomGrid}>
              <Drawer
                sx={RoomLayoutStyle.roomDrawer}
                variant="permanent"
                anchor="left"
              >
                <Box sx={RoomLayoutStyle.titleBox}>
                  <Toolbar>
                    <Typography variant="h4" style={RoomLayoutStyle.title}>
                      Collibri
                    </Typography>
                  </Toolbar>
                </Box>
                <Divider />   
                  <SideRoomTable/>
                  <RoomSettings />
                <Divider />
              </Drawer>
                {/*<RoomSettings />*/}
                {/*<SideRoomTable/>*/}
            </Grid>
            <Grid direction="column" sx={{width:'83%'}}>
              <Grid sx={{ height: '20%'}}>
                <Header/>
              </Grid>
              <Grid direction="row" sx={{display: 'flex', height: '80%'}}>
                  <Grid direction="column" sx={{display:'flex',width:'32%'}}>
                    <AddSection sections={sections} setSections={setSections}></AddSection>
                    <SectionsContainer sections={sections} setSections={setSections} setSectionId={setSectionId}/>
                    <UserInfoContainer />
                  </Grid>
                  <Grid direction="column" sx={{display:'flex',width:'68%'}}>
                      <AddPostButton sectionId={sectionId} setPosts={setPosts}/>
                      <SearchBar posts={posts} sectionId={sectionId} setPosts={setPosts}/>
                      <PostContainer sectionId={sectionId} posts={posts} setPosts={setPosts}/>
                  </Grid>
              </Grid>
            </Grid>
            {/*<Grid item md={4}>*/}
            {/*    <AddSection sections={sections} setSections={setSections}></AddSection>*/}
            {/*    <Paper>*/}
            {/*      <SectionsContainer sections={sections} setSections={setSections} setSectionId={setSectionId}/>*/}
            {/*    </Paper>*/}
            {/*    <UserInfoContainer />*/}
            {/*</Grid>*/}
            {/*<Grid  item xs={6}>*/}
            {/*    <Grid container*/}
            {/*          direction="row"*/}
            {/*          sx={{mb:'0.5rem'}}*/}
            {/*    >*/}
            {/*        <AddPostButton sectionId={sectionId} setPosts={setPosts}/>*/}
            {/*        <SearchBar posts={posts} sectionId={sectionId} setPosts={setPosts}/>*/}
            {/*    </Grid>*/}
            
            {/*    <Paper sx={postContainerStyle}>*/}
            {/*        <PostContainer sectionId={sectionId} posts={posts} setPosts={setPosts}/>*/}
            {/*    </Paper>*/}
            {/*</Grid>*/}
        </Grid>

    );
}

export default RoomLayout;