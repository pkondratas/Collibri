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
                    <Typography>Collibri</Typography>
                </ThemeProvider>
            </Grid>

            {/* Main Content */}
            <Grid item xs={6} container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#DEFEF5'}}>
                <Box>
                    <img src="/logo.png" alt="Collibri Logo" style={{ height: '15vh', width: 'auto', marginBottom: '50vh' }} />
                </Box>
                <Box sx={{marginTop: '-45vh', marginBottom: '3vh', minHeight: '50vh'}}>
                    {userInformation.loggedIn ? (
                        <Box>
                            <Box style={{ position: 'absolute', top: '5vh', right: '5vh' }}>
                                <IconButton color="secondary" onClick={handleLogout}>
                                    <ExitToAppIcon />
                                </IconButton>
                            </Box>

                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                                <Typography sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '2vh',
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
                        // Use ResetPasswordPage component only when the route matches "/reset-password/:token"
                        isResetPasswordPage ? (
                            <ResetPasswordContainer />
                        ) : (
                            <LoginContainer onLoginStatusChange={handleLoginStatus} />
                        )
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
