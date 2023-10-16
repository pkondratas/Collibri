import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Typography, OutlinedInput, InputAdornment, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { HeaderStyles } from '../styles/HeaderStyles'; 

const Header = () => {
    return (
        <AppBar position="static" style={HeaderStyles.appBar}>
            <Toolbar style={HeaderStyles.toolbar}>
                <Box style={HeaderStyles.box}>
                    <Tooltip title="Back functionality not implemented">
                        <IconButton color="inherit" aria-label="Back">
                            <ArrowBackIcon style={HeaderStyles.backButton} />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h4" style={HeaderStyles.title}>Collibri</Typography>
                </Box>
                <Box style={HeaderStyles.box}>
                    <Tooltip title="Search functionality not implemented">
                        <OutlinedInput
                            placeholder="Enter text"
                            style={HeaderStyles.searchInput}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon style={HeaderStyles.backButton} />
                                </InputAdornment>
                            }
                        />
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;