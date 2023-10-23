import React, { useState } from "react";
import { TextField, Button, Typography, Divider } from "@mui/material";
import CModal from "./CModal";
import {createRoom} from "../api/LandingPageApi";
import { JoinCreateRoomStyles } from "../styles/JoinCreateRoomStyles";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export const CreateRoom = ({setRooms}) => {
    const [name, setName] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleCreateRoom() {
        if (name === null || name === '') {
            return;
        }

        handleClose();
        createRoom(name, setRooms);
        setName(null);
    }

    return (
        <div>
            <Button sx={JoinCreateRoomStyles.button} size="large" onClick={handleOpen} variant="contained">Create Room</Button>
            <CModal showModal={open} handleClose={handleClose} handleChanges={handleCreateRoom} >
                <Typography variant="h5">
                    Create a new room
                </Typography>
                <TextField fullWidth id="roomName" label="Room name" variant="outlined"
                           onChange={e => setName(e.target.value)} margin="normal"/>
                <Divider />
            </CModal>
        </div>
    );
}