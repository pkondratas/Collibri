import React, {useEffect, useState} from "react";
import {Button, Grid, Paper} from '@mui/material';
import ParentComponent from "./ParentComponent";
import PostContainer from "./PostContainer";
import Header from "./Header";
import {postContainerStyle} from "../styles/RoomLayoutStyle";
import {AddSection} from "./AddSection";
import {RoomSettings} from "./RoomSettings";
import {AddPostButton} from "./AddPostButton";
import {SideRoomTable} from "./SideRooms";
import SearchBar from "./SearchBar";


const RoomLayout = () => {
    const [sectionId, setSectionId] = useState(0);
    const [sections, setSections] = useState([]);
    const [posts, setPosts] = useState([]);

    return (

        <Grid container spacing={2}
              direction="row"
              justifyContent="space-evenly"
              alignItems="strech">
            <Grid item xs={12}>
                <Paper><Header/></Paper>
            </Grid>
            <Grid item xs={1}>
                <RoomSettings/>
                <SideRoomTable/>
            </Grid>
            <Grid item md={4}>
                <AddSection sections={sections} setSections={setSections}></AddSection>
                <Paper><SectionsContainer sections={sections} setSections={setSections}
                                          setSectionId={setSectionId}/>
                </Paper>
                <UserInfoContainer username={"Future User"}/>
            </Grid>
            <Grid  item xs={6}>
                <Grid container
                      direction="row"
                      sx={{mb:'0.5rem'}}
                ><AddPostButton sectionId={sectionId} setPosts={setPosts}/>
                    <SearchBar posts={posts} sectionId={sectionId} setPosts={setPosts}/>
                </Grid>
                
                <Paper sx={postContainerStyle}>
                    <PostContainer sectionId={sectionId} posts={posts} setPosts={setPosts}/>
                </Paper>
            </Grid>
        </Grid>

    );
}

export default RoomLayout;