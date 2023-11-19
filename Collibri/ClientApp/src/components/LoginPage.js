import React, {useState} from 'react';
import {TextField, Button, Typography, Container, Paper, Box, CircularProgress} from '@mui/material';
import { Tooltip } from '@mui/material';
import { LoginPageStyles } from '../styles/LoginPageStyles.js';
import ForgotPasswordModal from "./ForgotPasswordModal";
import CreateAccountModal from "./CreateAccountModal";
import {loginUser} from "../api/LoginAPI";
import modalStyles from "../styles/ForgotPasswordModalStyles";

const LoginPage = () => {
    const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
    const [isRegistrationModalOpen , setRegistrationModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [fieldVisibility, setFieldVisibility] = useState(true);

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
    
    const handleSubmit = async () => {
        setFieldVisibility(false);
        setProcessing(true);
        
        try {
            const response = await loginUser({ "Username": username, "Password": password }); 
            console.log(response);
            return response;
        } catch (err) {
            console.log(err); 
        }
    }
    
    return (
        <Box style={LoginPageStyles.container}>
            <Box style={LoginPageStyles.header}>
                <Typography variant="h4" gutterBottom style={{ ...LoginPageStyles.typography, color: '#000000' }}>
                    Collibri
                </Typography>
            </Box>
            {/*<Box>*/}
            {/*    <Box sx={{ fontSize: '3rem', position:'absolute', backdropFilter: 'blur(4px)'}}>a</Box>*/}
            {/*    <Box sx={{ fontSize: '3rem'}}>O</Box>*/}
            {/*</Box>*/}
            {processing && (
                <Box sx={LoginPageStyles.loadingContainer}>
                    <Typography>Logging in...</Typography>
                    <CircularProgress sx={modalStyles.progressIndicator} color="inherit" />
                </Box>
            )}
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
                    <Box sx={{ mt: 1 }}>
                        <Box sx={LoginPageStyles.fieldContainer}>
                            {fieldVisibility && <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="username"
                              label="Username"
                              name="username"
                              value={username}
                              onChange={(e) => {
                                  setUsername(e.target.value);
                              }}
                              autoComplete="username"
                              sx={LoginPageStyles.input}
                            />}
                            {fieldVisibility && <TextField
                              margin="normal"
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              value={password}
                              onChange={(e) => {
                                  setPassword(e.target.value);
                              }}
                              autoComplete="current-password"
                              sx={LoginPageStyles.input}
                            />}
                        </Box>
                        <Typography variant="body2" style={LoginPageStyles.link}>
                                <span style={{ cursor: 'pointer' }} onClick={handleForgotPasswordClick}>
                                    Forgot Password?
                                </span>
                        </Typography>
                        {fieldVisibility && <Button fullWidth variant="contained" style={LoginPageStyles.button} onClick={() => {
                            handleSubmit();
                        }}>
                            Login
                        </Button>}
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


