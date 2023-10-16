import React, { useState } from "react";
import { createRoom } from "./RoomAPI";
import { TextField, Button, Modal, Box, Typography, Divider } from "@mui/material";
import CModal from "./CModal";

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

export const CreateRoom = () => {
    const [name, setName] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleCreateRoom() {
        if (name === null || name === '') {
            return;
        }

        handleClose();
        createRoom(name);
        setName(null);
    }

    return (
        <div>
            <Button size="large" onClick={handleOpen} variant="contained">Create Room</Button>
            <CModal showModal={open} handleClose={handleClose} handleChanges={handleCreateRoom} >
                <Typography variant="h5">
                    Create a new room
                </Typography>
                <TextField fullWidth id="roomName" label="Room name" variant="outlined"
                           onChange={e => setName(e.target.value)} margin="normal"/>
                <Divider />
            </CModal>
            {/*<Modal*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    aria-labelledby="modal-modal-title"*/}
            {/*    aria-describedby="modal-modal-description"*/}
            {/*>*/}
            {/*    <Box sx={style}>*/}
            {/*        <Typography variant="h5">*/}
            {/*            Create a new room*/}
            {/*        </Typography>*/}
            {/*        <TextField fullWidth id="roomName" label="Room name" variant="outlined"*/}
            {/*                   onChange={e => setName(e.target.value)} margin="normal"/>*/}
            {/*        <Divider />*/}
            {/*        <Button onClick={handleCreateRoom}>Confirm</Button>*/}
            {/*        <Button onClick={handleClose}>Cancel</Button>*/}
            {/*    </Box>*/}
            {/*</Modal>*/}
        </div>
    );
}