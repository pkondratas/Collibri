import React, {useState, useEffect} from 'react';
import {
    Grid,
    ThemeProvider,
    Typography,
    Button,
    Box,
    IconButton,
    Switch,
    FormControlLabel,
    Fade,
    Tooltip, styled
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {headerStyle, headerTextTheme} from '../../styles/LandingPageStyle';
import {CreateRoom} from '../Buttons/CreateRoom';
import {JoinRoom} from '../Buttons/JoinRoom';
import {RoomContainer} from '../Containers/RoomContainer';
import {AboutUsButton} from '../Buttons/AboutUsButton';
import LoginContainer from '../Containers/LoginContainer';
import {useDispatch, useSelector} from "react-redux";
import {onLogin, onLogout} from "../../state/user/userSlice";
import {LoginContainerStyles} from "../../styles/LoginContainerStyles";
import {useNavigate} from "react-router-dom";

export const LandingPageLayout = () => {
    const userInformation = useSelector((state) => state.user);
    const [rooms, setRooms] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Check for stored login status on page load
        const storedLoginStatus = localStorage.getItem('loggedIn');

        if (storedLoginStatus) {
            dispatch(onLogin(JSON.parse(storedLoginStatus).username));
        }
    }, []);

    const TextOnlyTooltip = styled(({className, ...props}) => (
        <Tooltip {...props} componentsProps={{tooltip: {className: className}}}/>
    ))(`
    color: black;
    background-color: transparent;
`);

    // Callback function to update login status
    const handleLoginStatus = (status, response) => {
        // Store the login status in localStorage
        localStorage.setItem('loggedIn', JSON.stringify({username: response, loggedIn: status}));
    };

    // Function to handle logout
    const handleLogout = () => {
        // Clear login status from localStorage
        localStorage.removeItem('loggedIn');

        // Update the loggedIn state
        dispatch(onLogout());
    };

    return (
        <Grid container style={{width: '100vw', height: '100vh'}}>
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
            <Grid item xs={6} container direction="column" justifyContent="center" alignItems="center"
                  style={{minHeight: '100vh', backgroundColor: '#DEFEF5'}}>
                <Box>
                    <img src="/logo.png" alt="Collibri Logo"
                         style={{height: '20%', width: 'auto', marginBottom: '3rem'}}/>
                </Box>
                <Box sx={{marginTop: '-25rem', marginBottom: '5rem', minHeight: '30rem'}}>
                    {userInformation.loggedIn ? (
                        <Box>
                            <Box style={{position: 'absolute', top: '5%', right: '5%', transform: 'translateX(50%)'}}>
                                <TextOnlyTooltip placement="bottom" title="Sign Out"
                                                 sx={{fontSize: '1.1rem', backgroundColor: 'white'}}>
                                    <IconButton color="secondary" onClick={handleLogout}>
                                        <ExitToAppIcon/>
                                    </IconButton>
                                </TextOnlyTooltip>
                            </Box>

                            <Fade in={true} {...({timeout: 1500})}>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <Typography variant="h5" gutterBottom
                                                style={{...LoginContainerStyles.typography, paddingTop: '1.2rem'}}>
                                        Your rooms
                                    </Typography>

                                    <RoomContainer rooms={rooms} setRooms={setRooms}/>

                                    <Box display="flex" justifyContent="space-between" width="25rem" mt={5}>
                                        <CreateRoom/>
                                        <JoinRoom/>
                                    </Box>
                                    <TextOnlyTooltip placement="right-end" title="More About Us"
                                                     sx={{fontSize: '1.1rem', backgroundColor: 'white'}}>
                                        <IconButton>
                                            <InfoIcon onClick={() => navigate("/about")} fontSize="large"
                                                      color="success"/>
                                        </IconButton>
                                    </TextOnlyTooltip>
                                </Box>


                            </Fade>


                        </Box>
                    ) : (
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <LoginContainer onLoginStatusChange={handleLoginStatus}/>
                        </Box>
                    )}
                </Box>

                {/* About Us button placed in the footer */}

            </Grid>
        </Grid>
    );
};
