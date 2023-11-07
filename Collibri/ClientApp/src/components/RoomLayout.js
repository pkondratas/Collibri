import React, { useState } from "react";
import {Button, Grid, Paper} from '@mui/material';
import ParentComponent from "./ParentComponent";
import PostContainer from "./PostContainer";
import Header from "./Header";
import { postContainerStyle } from "../styles/RoomLayoutStyle";
import {AddSection} from "./AddSection";
import {RoomSettings} from "./RoomSettings";
import {AddPostButton} from "./AddPostButton";


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
          <RoomSettings />
          <Paper>rooms</Paper>
          
      </Grid>
      <Grid item md={4}>
          <AddSection sections={sections} setSections={setSections} ></AddSection>
          <Paper><ParentComponent sections={sections} setSections={setSections} setSectionId={setSectionId} /></Paper>
      </Grid>
      <Grid item xs={6}>
          <AddPostButton sectionId={sectionId} setPosts={setPosts}/>
        <Paper sx={postContainerStyle}>
          <PostContainer sectionId={sectionId} posts={posts} setPosts={setPosts}/>
        </Paper>
      </Grid>
    </Grid>

  );
}

export default RoomLayout;