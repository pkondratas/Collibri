import React, { useState, useEffect } from 'react';
import {Grid, ThemeProvider, Typography, Button, Box, IconButton} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { headerStyle, headerTextTheme } from '../../styles/LandingPageStyle';
import { CreateRoom } from '../Buttons/CreateRoom';
import { JoinRoom } from '../Buttons/JoinRoom';
import { RoomContainer } from '../Containers/RoomContainer';
import { AboutUsButton } from '../Buttons/AboutUsButton';
import LoginContainer from '../Containers/LoginContainer';
import {useDispatch, useSelector} from "react-redux";
import {onLogin, onLogout} from "../../state/user/userSlice";

export const LandingPageLayout = () => {
    const userInformation = useSelector((state) => state.user);
    const [rooms, setRooms] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        // Check for stored login status on page load
        const storedLoginStatus = localStorage.getItem('loggedIn');
        
        if (storedLoginStatus) {
            dispatch(onLogin(JSON.parse(storedLoginStatus).username));
        }
    }, []);

    // Callback function to update login status
    const handleLoginStatus = (status, response) => {
        // Store the login status in localStorage
        localStorage.setItem('loggedIn', JSON.stringify({ username: response, loggedIn: status }));
    };

    // Function to handle logout
    const handleLogout = () => {
        // Clear login status from localStorage
        localStorage.removeItem('loggedIn');

        // Update the loggedIn state
        dispatch(onLogout());
    };

    return (
        <Grid container style={{ width: '100vw', height: '100vh' }}>
            {/* Header */}
            <Grid item xs={6} style={{
                ...headerStyle,
                backgroundImage: `url("${userInformation.loggedIn ? '/background5_recolored.svg' : '/background5.svg'}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
            }}>
                <ThemeProvider theme={headerTextTheme}>
                    <Typography sx={{fontFamily: 'cursive'}}>Collibri</Typography>
                </ThemeProvider>
            </Grid>

            {/* Main Content */}
            <Grid item xs={6} container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#DEFEF5'}}>
                <Box>
                    <img src="/logo.png" alt="Collibri Logo" style={{ height: '20%', width: 'auto', marginBottom: '3rem' }} />
                </Box>
                <Box sx={{marginTop: '-25rem', marginBottom: '5rem', minHeight: '30rem'}}>
                    {userInformation.loggedIn ? (
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
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <LoginContainer onLoginStatusChange={handleLoginStatus} />
                        </Box>
                    )}
                </Box>
                
                {/* About Us button placed in the footer */}
                <Box >
                    <AboutUsButton />
                </Box>
            </Grid>
        </Grid>
    );
};
