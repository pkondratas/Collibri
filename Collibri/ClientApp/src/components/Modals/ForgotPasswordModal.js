import React, { useState, useEffect } from 'react';
import { Modal, TextField, Button, Box, Typography, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import modalStyles from '../../styles/ForgotPasswordModalStyles';
import { sendEmail } from '../../api/ResetPasswordAPI';

const ForgotPasswordModal = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [emailValid, setEmailValid] = useState(true);

    useEffect(() => {
        if (open) {
            setEmail('');
            setLoading(false);
            setSuccess(null);
            setEmailValid(true);
        }
    }, [open]);

    const isEmailValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(true); // Reset the validation when the email changes
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !isEmailValid(email)) {
            setEmailValid(false);
            return;
        }

        try {
            setLoading(true);
            await sendEmail({ Email: email });
            setSuccess(true);
        } catch (error) {
            console.error('Password reset failed:', error);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal open={open} onClose={onClose} centered>
            <Box sx={modalStyles.container2}>
                {!loading && !success && (
                    <Box sx={modalStyles.closeButtonContainer}>
                        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                )}
                {success !== null ? (
                    <Box sx={modalStyles.processing}>
                        {success ? (
                            <>
                                <Typography>Email sent successfully!</Typography>
                                <IconButton sx={modalStyles.checkIcon} onClick={onClose}>
                                    <CheckIcon />
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <Typography>Error sending email</Typography>
                                <IconButton sx={modalStyles.errorIcon} onClick={onClose}>
                                    <ErrorIcon />
                                </IconButton>
                            </>
                        )}
                    </Box>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {loading ? (
                            <Box sx={modalStyles.processing}>
                                <Typography>Sending email...</Typography>
                                <CircularProgress color="inherit" />
                            </Box>
                        ) : (
                            <>
                                <Typography variant="h6" gutterBottom>
                                    Forgot Password
                                </Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={handleEmailChange}
                                    sx={modalStyles.inputField}
                                />
                                <Typography
                                    sx={{
                                        ...modalStyles.errorHelperText,
                                        visibility: emailValid ? 'hidden' : 'visible', 
                                    }}
                                >
                                    Incorrect format (ex: something@smth.com)
                                </Typography>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={modalStyles.resetButton}
                                >
                                    Reset Password
                                </Button>
                            </>
                        )}
                    </form>
                )}
            </Box>
        </Modal>
    );
};

export default ForgotPasswordModal;
