import React from 'react';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <Box style={{ display: 'grid', placeItems: 'center', height: '100vh', backgroundColor: '#ababab' }}>
            <Box style={{ position: 'absolute', top: 0, left: 0, padding: '20px', zIndex: 1 }}>
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#000000' }}>
                    Collibri
                </Typography>
            </Box>
            <Container maxWidth="xs" style={{ padding: '20px', borderRadius: '10px', textAlign: 'center', position: 'relative', zIndex: 0}}>
                <Paper elevation={0} style={{ padding: 20, marginBottom: 50, borderRadius: 12, width: '100%', backgroundColor: '#d3d3d3'}}>
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginBottom: 20 }}>
                        Login
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
                            sx={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
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
                            sx={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
                        />
                        <Typography variant="body2" style={{ marginBottom: 20 }}>
                            <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
                                Forgot Password?
                            </Link>
                        </Typography>
                        <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: '#757575', color: '#FFFFFF' }}>
                            Login
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;

