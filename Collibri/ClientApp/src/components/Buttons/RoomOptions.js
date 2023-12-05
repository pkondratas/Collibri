import React from "react";
import {MenuItem, Menu, ListItemText, ListItemIcon, IconButton} from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {RoomLayoutStyles} from "../../styles/RoomLayoutStyle";
import {CreateRoom} from "./CreateRoom";
import {JoinRoom} from "./JoinRoom";

export const RoomOptions = ({setRooms}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton sx={RoomLayoutStyles.addSettingsButtons} id="options-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                <AddCircleIcon color="success" fontSize="large"/>
            </IconButton>
            <Menu id="options-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                  MenuListProps={{
                      'aria-labelledby': 'options-button',
                  }}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                  }}
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                  }}
           >
                <MenuItem>
                    <CreateRoom closeMenuItem={handleClose} setRooms={setRooms}/>
                </MenuItem>
                
                <MenuItem onClick={handleClose}>
                    <JoinRoom/>
                </MenuItem>
            </Menu>
        </>
    );
}