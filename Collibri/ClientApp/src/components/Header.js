import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Typography, OutlinedInput, InputAdornment, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { HeaderStyles } from '../styles/HeaderStyles'; 
import {useNavigate} from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = (props) => {
    
    const navigate = useNavigate();
    
    return (
        <AppBar position="static" style={HeaderStyles.appBar}>
            <Toolbar style={HeaderStyles.toolbar}>
                <Box style={HeaderStyles.box}>
                    <Tooltip title="Go back to room selection">
                        <IconButton color="inherit" aria-label="Back" onClick={() => navigate("/")}>
                            <ArrowBackIcon style={HeaderStyles.backButton} />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h4" style={HeaderStyles.title}>Collibri</Typography>
                </Box>
                <Box style={HeaderStyles.box}>
                    <SearchBar posts={props.posts} sectionId={props.SectionId} setPosts={props.setPosts}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;