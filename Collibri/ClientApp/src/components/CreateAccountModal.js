import {Box, Button, CircularProgress, IconButton, Modal, TextField, Tooltip, Typography} from "@mui/material";
import React, {useState} from "react";
import modalStyles from "../styles/ForgotPasswordModalStyles";
import {Check} from "@mui/icons-material";
import {registerUser} from "../api/RegisterAPI";


const CreateAccountModal = ({open, onClose}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [incorrectEmail, setIncorrectEmail] = useState(false);
    const [incorrectUsername, setIncorrectUsername] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;
    
    const handleSubmit = (e) => {
        // e.preventDefault();
        if(!emailRegex.test(email)) {
            setIncorrectEmail(true);
        }
        if(username.trim() === '') {
            setIncorrectUsername(true);
        }
        if(!passwordRegex.test(password)) {
            setIncorrectPassword(true);
        }
        
        if(emailRegex.test(email) && !(username.trim() === '') && passwordRegex.test(password)) {
            setProcessing(true);
            
            const response = 
                registerUser({ "Username": username, "Email": email, "Password": password })
                    .then(data => {
                        setSuccess(true);
                    })
        }
        
        // must go here registration logic
    };
    
    const handleClose = () => {
        setIncorrectUsername(false);
        setIncorrectPassword(false);
        setIncorrectEmail(false);
        
        setUsername('');
        setPassword('');
        setEmail('');
        
        setProcessing(false);
        setSuccess(false);
        
        onClose();
    }
    
    return (
        <Modal open={open} onClose={() =>  handleClose()} centered>
            <Box sx={modalStyles.container}>
                { processing ? (
                    success ? (
                      <Box sx={modalStyles.processing}>
                          <Typography>
                              Account created successfully
                          </Typography>
                          <IconButton sx={modalStyles.progressIndicator} onClick={() => {
                              handleClose()
                          }}>
                              <Check />
                          </IconButton>
                      </Box>
                    ) : (
                      <Box sx={modalStyles.processing}>
                          <Typography>Processing...</Typography>
                          <CircularProgress sx={modalStyles.progressIndicator} color="inherit" />
                      </Box>
                    )
                ) : (
                  <Box>
                      <Typography variant="h6" gutterBottom>
                          Create User
                      </Typography>
                      <TextField
                        fullWidth
                        error={incorrectUsername}
                        margin="normal"
                        onEmptied="Field cannot be empty!"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => {
                            setIncorrectUsername(false);
                            setUsername(e.target.value)
                        }}
                        sx={modalStyles.inputField}
                      />
                      <Box sx={modalStyles.helperTextBox}>
                          { incorrectUsername && (
                            <Typography sx={modalStyles.errorHelperText}>
                                Username field cannot be empty!
                            </Typography>)
                          }
                      </Box>
                      <TextField
                        fullWidth
                        error={incorrectEmail}
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => {
                            setIncorrectEmail(false);
                            setEmail(e.target.value)
                        }}
                        sx={modalStyles.inputField}
                      />
                      <Box sx={modalStyles.helperTextBox}>
                          { incorrectEmail && (
                            <Typography sx={modalStyles.errorHelperText}>
                                Incorrect format (ex: something@smth.com)
                            </Typography>)
                          }
                      </Box>
                      <TextField
                        fullWidth
                        error={incorrectPassword}
                        margin="normal"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => {
                            setIncorrectPassword(false);
                            setPassword(e.target.value)
                        }}
                        sx={modalStyles.inputField}
                      />
                      <Box sx={modalStyles.helperTextBox}>
                          { incorrectPassword ? (
                            <Typography sx={modalStyles.errorHelperText}>
                                Password must contain at least one uppercase and one digit
                            </Typography>) : (
                            <Typography sx={modalStyles.helperText}>
                                Password must contain at least one uppercase and one digit
                            </Typography>
                          )
                          }
                      </Box>
                      <Button
                        fullWidth
                        sx={modalStyles.resetButton}
                        onClick={() => handleSubmit()}
                      >
                          Register
                      </Button>
                  </Box>
                )
                }
            </Box>
        </Modal>
    );
}
export default CreateAccountModal;