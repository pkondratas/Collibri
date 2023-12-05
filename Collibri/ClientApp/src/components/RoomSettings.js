import React, {useState} from "react";
import {MenuItem, Menu, ListItemText, ListItemIcon, IconButton} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import {RoomLayoutStyles} from "../styles/RoomLayoutStyle";
import RoomCodeModal from "./Modals/RoomCodeModal";
import {useSelector} from "react-redux";
import DeleteRoomModal from "./Modals/DeleteRoomModal";

export const RoomSettings = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [invModal, setInvModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const userInformation = useSelector((state) => state.user);
    const rooms = useSelector((state) => state.rooms);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleInvitation = () => {
        setInvModal(true);
    }
    
    const isOwner = () => {
        console.log(rooms.currentRoom.creatorUsername === userInformation.username);
    }
    
    return (
        <>
            <IconButton sx={RoomLayoutStyles.addSettingsButtons} id="options-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                <SettingsIcon fontSize="large" />
            </IconButton>
            <Menu id="options-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                  MenuListProps={{
                          'aria-labelledby': 'options-button',
                      }}>
                <MenuItem onClick={() => handleInvitation()}>
                    <ListItemIcon>
                        <PersonAddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Invitation code</ListItemText>
                </MenuItem>
                {/*<MenuItem onClick={handleClose}>*/}
                {/*    <ListItemIcon>*/}
                {/*        <SettingsIcon fontSize="small" />*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText>Room settings</ListItemText>*/}
                {/*</MenuItem>*/}
                <MenuItem disabled={rooms.currentRoom.creatorUsername !== userInformation.username}>
                    <ListItemIcon>
                        <DriveFileRenameOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Change room name</ListItemText>
                </MenuItem>
                <MenuItem disabled={rooms.currentRoom.creatorUsername !== userInformation.username}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" style={{color: "red"}} />
                    </ListItemIcon>
                    <ListItemText style={{color: "red"}}>Delete room</ListItemText>
                </MenuItem>
                <RoomCodeModal invModal={invModal} setInvModal={setInvModal} anchorClose={handleClose}/>
                <DeleteRoomModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
            </Menu>
        </>
    );
}