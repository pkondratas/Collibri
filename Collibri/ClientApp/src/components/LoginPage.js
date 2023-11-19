import React, {useState} from 'react';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';
import { Tooltip } from '@mui/material';
import { LoginPageStyles } from '../styles/LoginPageStyles.js';
import ForgotPasswordModal from "./Modals/ForgotPasswordModal";
import CreateAccountModal from "./Modals/CreateAccountModal";


const LoginPage = () => {
    const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
    const [isRegistrationModalOpen , setRegistrationModalOpen] = useState(false);

    const handleForgotPasswordClick = () => {
        setForgotPasswordModalOpen(true);
    };
    
    const closeForgotPasswordModal = () => {
        setForgotPasswordModalOpen(false);
    };

    const handleRegistrationClick = () => {
        setRegistrationModalOpen(true);
    }
    const closeRegistrationModal = () => {
        setRegistrationModalOpen(false);
    }
    
    return (
        <Box style={LoginPageStyles.container}>
            <Box style={LoginPageStyles.header}>
                <Typography variant="h4" gutterBottom style={{ ...LoginPageStyles.typography, color: '#000000' }}>
                    Collibri
                </Typography>
            </Box>
            <Container maxWidth="xs" style={LoginPageStyles.formContainer}>
                <Paper elevation={0} style={LoginPageStyles.paper}>
                    <Typography variant="h5" gutterBottom style={LoginPageStyles.typography}>
                        Login
                    </Typography>
                    <Typography variant="body2" style={LoginPageStyles.link} >
                        Need an account?            
                        <span style={{ cursor: 'pointer', color:"black" }} onClick={handleRegistrationClick}>
                                    &nbsp;Register
                                </span>
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            sx={LoginPageStyles.input}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            sx={LoginPageStyles.input}
                        />
                        <Typography variant="body2" style={LoginPageStyles.link}>
                                <span style={{ cursor: 'pointer' }} onClick={handleForgotPasswordClick}>
                                    Forgot Password?
                                </span>
                        </Typography>
                        <Tooltip title="Functionality not implemented" arrow>
                            <Button type="submit" fullWidth variant="contained" style={LoginPageStyles.button}>
                                Login
                            </Button>
                        </Tooltip>
                    </Box>
                </Paper>
            </Container>
            <ForgotPasswordModal
                open={forgotPasswordModalOpen}
                onClose={closeForgotPasswordModal}
            />
            <CreateAccountModal
            open={isRegistrationModalOpen}
            onClose={closeRegistrationModal}
            />
        </Box>
    );
};

export default LoginPage;


