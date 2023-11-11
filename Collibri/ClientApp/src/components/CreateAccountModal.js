import {Box, Button, Modal, TextField, Tooltip, Typography} from "@mui/material";
import React, {useState} from "react";
import modalStyles from "../styles/ForgotPasswordModalStyles";


const CreateAccountModal = ({open, onClose}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // must go here registration logic
        onClose();
    };
    
    return (
        <Modal open={open} onClose={onClose} centered>
            <Box sx={modalStyles.container}>
                <Typography variant="h6" gutterBottom>
                    Create User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={modalStyles.inputField}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={modalStyles.inputField}
                    />

                    <Tooltip title="Functionality not implemented" arrow>
                        <span>
                             <Button
                                 type="submit"
                                 fullWidth
                                 variant="disabled"
                                 sx={modalStyles.resetButton}
                             >
                            Register
                        </Button>
                        </span>
                    </Tooltip>
                </form>
            </Box>
        </Modal>
    );
}
export default CreateAccountModal;