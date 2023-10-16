import React from 'react';
import {AppBar,Toolbar,IconButton,Tooltip,OutlinedInput,InputAdornment,Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = () => {
    return (
        <AppBar position="static" style={{ background: 'white' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Back functionality not implemented">
                        <IconButton color="inherit" aria-label="Back">
                            <ArrowBackIcon style={{ color: 'black' }} />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h4" style={{ color: 'black', fontWeight: 'bold'}}>Collibri</Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Search functionality not implemented">
                        <OutlinedInput
                            placeholder="Enter text"
                            style={{ width: '200px', height: '35px'}}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon style={{ color: 'black' }} />
                                </InputAdornment>
                            }
                        />
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;