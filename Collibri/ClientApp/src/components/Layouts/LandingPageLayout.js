import React, { useState } from "react";
import {Grid, ThemeProvider, Typography} from "@mui/material";
import {headerStyle, headerTextTheme} from "../../styles/LandingPageStyle";
import {CreateRoom} from "../Buttons/CreateRoom";
import {JoinRoom} from "../Buttons/JoinRoom";
import {RoomContainer} from "../Containers/RoomContainer";
import '../../styles/tableList.css';
import {AboutUsButton} from "../Buttons/AboutUsButton";

export const LandingPageLayout = () => {
    
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
                    <RoomContainer />
                </Grid>

                {/*Button grid*/}
                <Grid item
                      container
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      sx={{mt:'45rem'}}>
                    <Grid item >
                        <CreateRoom/>
                    </Grid>
                    <Grid item>
                        <JoinRoom/>
                    </Grid>
                    
                </Grid>
                <Grid item  >
                    <AboutUsButton/>
                </Grid>

            </Grid>
        </Grid>
    );
}