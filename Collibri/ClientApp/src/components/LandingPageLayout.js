import React, { useState } from "react";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import './LandingPage.css';
import {RoomList} from "./RoomList";
import {Grid, ThemeProvider, Typography} from "@mui/material";
import {headerStyle, headerTextTheme} from "../styles/LandingPageStyle";

export const LandingPageLayout = () => {

    const [rooms, setRooms] = useState([]);

    return (
        <Grid container
              style={{width: "100vw", height: "100vh"}}>

            {/*Header*/}
            <Grid item xs={6} style={headerStyle}>
                <ThemeProvider theme={headerTextTheme}>
                    <Typography>
                        Collibri
                    </Typography>
                </ThemeProvider>
            </Grid>

            {/*List and buttons*/}
            <Grid item xs={6}
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{paddingTop: "2em", paddingBottom: "9em"}}>

                {/*List*/}
                <Grid item>
                    <RoomList rooms={rooms} setRooms={setRooms}/>
                </Grid>

                {/*Button grid*/}
                <Grid item
                      container
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="center">
                    <Grid item>
                        <CreateRoom setRooms={setRooms}/>
                    </Grid>
                    <Grid item>
                        <JoinRoom/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}