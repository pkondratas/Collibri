import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Paper, CircularProgress } from '@mui/material';
import { resetPassword } from '../api/ResetPasswordAPI';

const ResetPasswordPage = () => {
    const { token } = useParams();
    const [decodedToken, setDecodedToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const decoded = decodeURIComponent(token);
        setDecodedToken(decoded);
    }, [token]);

    useEffect(() => {
        if (resetSuccess) {
            navigate('/home');
        }
    }, [resetSuccess, navigate]);

    const isStrongPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (!isStrongPassword(password)) {
            setError('Password must have at least 6 characters, contain at least one uppercase, and one digit.');
            return;
        }

        try {
            setProcessing(true);
            await resetPassword({ "Email": email, "Token": decodedToken, "NewPassword": password });
            setResetSuccess(true);
        } catch (error) {
            console.error('An error occurred while resetting your password.');
            setEmailError('Failed to reset your password. Please ensure you are using the correct email address.');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={0} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    Reset Password
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError !== ''}
                    helperText={emailError}
                />
                <TextField
                    label="New Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={error !== '' && error !== 'Passwords do not match.'}
                    helperText={error !== 'Passwords do not match.' && error}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={error === 'Passwords do not match.'}
                    helperText={error === 'Passwords do not match.' && error}
                />
                {processing && <CircularProgress style={{ margin: '16px 0' }} />}
                <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                    Reset Password
                </Button>
            </Paper>
        </Container>
    );
};

export default ResetPasswordPage;
