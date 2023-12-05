import React, { useState, useEffect } from 'react';
import {Grid, ThemeProvider, Typography, Button, Box, IconButton} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { headerStyle, headerTextTheme } from '../../styles/LandingPageStyle';
import { CreateRoom } from '../Buttons/CreateRoom';
import { JoinRoom } from '../Buttons/JoinRoom';
import { RoomContainer } from '../Containers/RoomContainer';
import { AboutUsButton } from '../Buttons/AboutUsButton';
import LoginContainer from '../Containers/LoginContainer';

export const LandingPageLayout = () => {
    const [rooms, setRooms] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check for stored login status on page load
        const storedLoginStatus = localStorage.getItem('loggedIn');

        if (storedLoginStatus) {
            setLoggedIn(JSON.parse(storedLoginStatus));
        }
    }, []);

    // Callback function to update login status
    const handleLoginStatus = (status) => {
        setLoggedIn(status);

        // Store the login status in localStorage
        localStorage.setItem('loggedIn', JSON.stringify(status));
    };

    // Function to handle logout
    const handleLogout = () => {
        // Clear login status from localStorage
        localStorage.removeItem('loggedIn');

        // Update the loggedIn state
        setLoggedIn(false);
    };

    return (
        <Grid container style={{ width: '100vw', height: '100vh' }}>
            {/* Header */}
            <Grid item xs={6} style={headerStyle}>
                <ThemeProvider theme={headerTextTheme}>
                    <Typography>Collibri</Typography>
                </ThemeProvider>
            </Grid>

            {/* Main Content */}
            <Grid item xs={6} container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#DEFEF5'}}>
                {loggedIn ? (
                    <Box>
                        <Box style={{ position: 'absolute', top: '5%', right: '5%', transform: 'translateX(50%)' }}>
                            <IconButton color="secondary" onClick={handleLogout}>
                                <ExitToAppIcon />
                            </IconButton>
                        </Box>

                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                            <Typography sx={{
                                fontWeight: 'bold',
                                marginBottom: 5,
                            }}>
                                Your rooms: 
                            </Typography>
                            
                            <RoomContainer rooms={rooms} setRooms={setRooms} />

                            <Box display="flex" justifyContent="space-between" width="25rem" mt={5}>
                                <CreateRoom />
                                <JoinRoom />
                            </Box>
                        </Box>
                    </Box>
                ) : (
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                        <LoginContainer onLoginStatusChange={handleLoginStatus} />
                    </Box>
                )}

                {/* About Us button placed in the footer */}
                <Box style={{ position: 'absolute', bottom: '5rem', right: '25%', transform: 'translateX(50%)' }}>
                    <AboutUsButton />
                </Box>
            </Grid>
        </Grid>
    );
};
