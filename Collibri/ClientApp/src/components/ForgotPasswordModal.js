import React, { useState } from 'react';
import { Modal, TextField, Button, Box, Typography, Tooltip } from '@mui/material';
import modalStyles from '../styles/ForgotPasswordModalStyles';

const ForgotPasswordModal = ({ open, onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the forgot password logic here (e.g., send a reset email)
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose} centered>
            <Box sx={modalStyles.container}>
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

