import React from "react";
import {Grid,Paper} from '@mui/material';
import ParentComponent from "./ParentComponent";



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