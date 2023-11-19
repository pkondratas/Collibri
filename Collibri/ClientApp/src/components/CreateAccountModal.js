import {Box, Button, CircularProgress, IconButton, Modal, TextField, Tooltip, Typography} from "@mui/material";
import React, {useState} from "react";
import modalStyles from "../styles/ForgotPasswordModalStyles";
import {Check, Close, Replay} from "@mui/icons-material";
import {registerUser} from "../api/RegisterAPI";


const CreateAccountModal = ({open, onClose}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [email, setEmail] = useState('');
    const [incorrectEmail, setIncorrectEmail] = useState(false);
    const [incorrectUsername, setIncorrectUsername] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [success, setSuccess] = useState('waiting');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;  //turi but bent 6 charai
    
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
        if(password !== passwordValidation) {
            setPasswordMatch(true);
        }
        
        if(emailRegex.test(email) && !(username.trim() === '') && passwordRegex.test(password) && password === passwordValidation) {
            setProcessing(true);
            
            const response = 
                registerUser({ "Username": username, "Email": email, "Password": password })
                    .then(data => {
                        if(typeof data === 'string') {
                            setSuccess('pass');
                        } else {
                            setSuccess('fail');
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        setSuccess('fail')
                    })
        }
        
        // must go here registration logic
    };
    
    const setAllToInitial = () => {
        setIncorrectUsername(false);
        setIncorrectPassword(false);
        setIncorrectEmail(false);
        setPasswordMatch(false);

        setUsername('');
        setPassword('');
        setEmail('');
        setPasswordValidation('');
        
        setSuccess('waiting');
        setProcessing(false);
    }
    
    const handleClose = () => {
        setAllToInitial()
        onClose();
    }
    
    return (
        <Modal open={open} onClose={() =>  handleClose()} centered>
            <Box sx={modalStyles.container}>
                { processing ? (
                    success === 'pass' ? (
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
                    ) : success === 'fail' ? (
                      <Box sx={modalStyles.processing}>
                          <Typography>Oops! Something went wrong...</Typography>
                          <Typography>Please try again!</Typography>
                          <Box sx={modalStyles.closeRepeatContainer}>
                              <IconButton onClick={() => {
                                  handleClose();
                              }}>
                                  <Close />
                              </IconButton>
                              <IconButton onClick={() => {
                                  setAllToInitial();
                              }}>
                                  <Replay />
                              </IconButton>
                          </Box>
                      </Box>
                    ) : (
                      <Box sx={modalStyles.processing}>
                          <Typography>Processing...</Typography>
                          <CircularProgress sx={modalStyles.progressIndicator} color="inherit" />
                      </Box>
                    )   
                ) : (
                  <Box>
                      <Box sx={modalStyles.topContainer}>
                          <Typography sx={modalStyles.title} variant="h6" gutterBottom>
                              Create User
                          </Typography>
                          <IconButton onClick={() => {
                              handleClose()
                          }}>
                              <Close />
                          </IconButton>
                      </Box>
                      <TextField
                        fullWidth
                        error={incorrectUsername}
                        margin="normal"
                        onEmptied="Field cannot be empty!"
                        label="Username"
                        variant="filled"
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
                        variant="filled"
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
                        variant="filled"
                        value={password}
                        type="password"
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
                      <TextField
                        fullWidth
                        error={passwordMatch}
                        margin="normal"
                        label="Confirm password"
                        variant="filled"
                        value={passwordValidation}
                        type="password"
                        onChange={(e) => {
                            setPasswordMatch(false);
                            setPasswordValidation(e.target.value)
                        }}
                        sx={modalStyles.inputField}
                      />
                      <Box sx={modalStyles.helperTextBox}>
                          { passwordMatch && (
                            <Typography sx={modalStyles.errorHelperText}>
                                Passwords must match!
                            </Typography>)
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