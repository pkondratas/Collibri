import React, { useState } from 'react';
import { Modal, TextField, Button, Box, Typography, Tooltip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import modalStyles from "../../styles/ForgotPasswordModalStyles";
import {sendEmail} from "../../api/ResetPasswordAPI"; 


const ForgotPasswordModal = ({ open, onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendEmail({ "Email" : email });
            onClose();
        } catch (error) {
            console.error('Password reset failed:', error);
        }
    };

    return (
        <Modal open={open} onClose={onClose} centered>
            <Box sx={modalStyles.container} position="relative">
                <Box sx={modalStyles.closeButtonContainer}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Typography variant="h6" gutterBottom>
                    Forgot Password
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        sx={modalStyles.inputField}
                    />

                    <Tooltip title="Functionality not implemented" arrow>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={modalStyles.resetButton}
                        >
                            Reset Password
                        </Button>
                    </Tooltip>
                </form>
            </Box>
        </Modal>
    );
};

export default ForgotPasswordModal;
