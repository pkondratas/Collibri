import React from "react";
import {Button, MenuItem, Menu, ListItemText, ListItemIcon} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';

export const RoomSettings = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button id="options-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    size="large" onClick={handleClick} variant="contained">
                <SettingsIcon />
            </Button>
            
            <Menu id="options-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                  MenuListProps={{
                          'aria-labelledby': 'options-button',
                      }}>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <DriveFileRenameOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Change username</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add user</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Server settings</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" style={{color: "red"}} />
                    </ListItemIcon>
                    <ListItemText style={{color: "red"}}>Istrint patamsejusi knopke</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}