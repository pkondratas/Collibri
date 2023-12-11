import React, {useState} from "react";
import {MenuItem, Menu, ListItemText, ListItemIcon, IconButton} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {RoomLayoutStyles} from "../styles/RoomLayoutStyle";
import RoomCodeModal from "./Modals/RoomCodeModal";
import {useDispatch, useSelector} from "react-redux";
import DeleteRoomModal from "./Modals/DeleteRoomModal";
import UpdateRoomModal from "./Modals/UpdateRoomModal";
import {updateRoom} from "../api/RoomAPI";
import {setRoomsSlice, updateRoomSlice} from "../state/user/roomsSlice";
import {CreatePostModal} from "./Modals/CreatePostModal";
import {ManageTagsModal} from "./Modals/ManageTagsModal";

export const RoomSettings = (props) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [invModal, setInvModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const userInformation = useSelector((state) => state.user);
    const rooms = useSelector((state) => state.rooms);
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);
    const [tagOpen, setTagOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleInvitation = () => {
        setInvModal(true);
    }
    
    const updateCurrentRooms = (data) => {
        const updatedRooms = rooms.rooms.map(x => {
            if (x.id === data.id) {
                return data;
            } else {
                return x;
            }
        });
        dispatch(setRoomsSlice(updatedRooms));
    }
    
    const handleUpdateRoom = (newName) => {
        const updatedRoom = {
            ...rooms.currentRoom,
            name: newName
        };
        updateRoom(rooms.currentRoom.id, updatedRoom, updateCurrentRooms);
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
                <MenuItem disabled={rooms.currentRoom.creatorUsername !== userInformation.username} onClick={() => {
                    setUpdateModal(true);
                }}>
                    <ListItemIcon>
                        <DriveFileRenameOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Change room name</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => {setTagOpen(true); handleClose()}}>
                    <ListItemIcon>
                        <LocalOfferIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>Manage tags</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => setDeleteModal(true)} disabled={rooms.currentRoom.creatorUsername !== userInformation.username}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" style={{color: "red"}} />
                    </ListItemIcon>
                    <ListItemText style={{color: "red"}}>Delete room</ListItemText>
                </MenuItem>
                <RoomCodeModal invModal={invModal} setInvModal={setInvModal} anchorClose={handleClose}/>
                <UpdateRoomModal room={rooms.currentRoom} updateModal={updateModal} setUpdateModal={setUpdateModal} updateRoomName={handleUpdateRoom}/>
                <DeleteRoomModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
            </Menu>
            <ManageTagsModal showModal={tagOpen} setOpen={setTagOpen} tags={props.tags} setTags={props.setTags}/>
        </>
    );
}