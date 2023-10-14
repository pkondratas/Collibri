import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ParentComponent from "./ParentComponent";
import {Container} from "@mui/material";



const RoomLayout = () => {
  return (
      
      <Grid container spacing={2} 
            direction="row"
            justifyContent="space-evenly"
            alignItems="strech">
    <Grid item xs={12}>
      <Paper>Header</Paper>
    </Grid>
        <Grid item xs={1}>
          <Paper>rooms</Paper>
        </Grid>
    <Grid item md={4}>
      <Paper><ParentComponent/></Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>Posts</Paper>
    </Grid>
    <Grid container justifyContent="flex-end" item xs={6}>
      <Paper>text text text text text</Paper>
    </Grid>
  </Grid>
 
  );
}

export default RoomLayout;