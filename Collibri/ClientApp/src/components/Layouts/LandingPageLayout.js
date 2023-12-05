import React, { useState, useEffect } from "react";
import { Grid, ThemeProvider, Typography, Button } from "@mui/material";
import { headerStyle, headerTextTheme } from "../../styles/LandingPageStyle";
import { CreateRoom } from "../Buttons/CreateRoom";
import { JoinRoom } from "../Buttons/JoinRoom";
import { RoomContainer } from "../Containers/RoomContainer";
import { AboutUsButton } from "../Buttons/AboutUsButton";
import LoginContainer from "../Containers/LoginContainer";

export const LandingPageLayout = () => {
    const [rooms, setRooms] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check for stored login status on page load
        const storedLoginStatus = localStorage.getItem("loggedIn");

        if (storedLoginStatus) {
            setLoggedIn(JSON.parse(storedLoginStatus));
        }
    }, []);

    // Callback function to update login status
    const handleLoginStatus = (status) => {
        setLoggedIn(status);

        // Store the login status in localStorage
        localStorage.setItem("loggedIn", JSON.stringify(status));
    };

    // Function to handle logout
    const handleLogout = () => {
        // Clear login status from localStorage
        localStorage.removeItem("loggedIn");

        // Update the loggedIn state
        setLoggedIn(false);
    };

    return (
        <Grid container style={{ width: "100vw", height: "100vh" }}>
            {/* Header */}
            <Grid item xs={6} style={headerStyle}>
                <ThemeProvider theme={headerTextTheme}>
                    <Typography>Collibri</Typography>
                </ThemeProvider>
            </Grid>

            {/* Main Content */}
            <Grid
                item
                xs={6}
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                style={{ paddingTop: "2em", paddingBottom: "9em" }}
            >
                {loggedIn ? (
                    // Render main content when logged in
                    <Grid
                        item
                        xs={6}
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{ paddingTop: "2em", paddingBottom: "9em" }}
                    >
                        {/* List */}
                        <Grid item>
                            <RoomContainer rooms={rooms} setRooms={setRooms} />
                        </Grid>

                        {/* Button grid */}
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            sx={{ mt: "45rem" }}
                        >
                            <Grid item>
                                <CreateRoom setRooms={setRooms} />
                            </Grid>
                            <Grid item>
                                <JoinRoom />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <AboutUsButton />
                        </Grid>

                        {/* Logout Button */}
                        <Grid item>
                            <Button variant="contained" color="secondary" onClick={handleLogout}>
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                ) : (
                    // Render login page when not logged in
                    <LoginContainer onLoginStatusChange={handleLoginStatus} />
                )}
            </Grid>
        </Grid>
    );
};
