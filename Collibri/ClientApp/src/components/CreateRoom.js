import React, {useRef, useState} from "react";
import {TextField, Button, Typography, Divider} from "@mui/material";
import CModal from "./CModal";
import {createRoom} from "../api/LandingPageApi";

export const CreateRoom = ({setRooms}) => {
    const nameFieldRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setError(false);
    }

    const handleOnChange = () => {
        if (nameFieldRef.current.value.trim() !== '') {
            setError(false);
        } else {
            setError(true);
        }
    }

    function handleCreateRoom() {
        if (nameFieldRef.current.value === null || nameFieldRef.current.value.trim() === '') {
            setError(true);
            return;
        } else {
            handleClose();
            createRoom(nameFieldRef.current.value.trim(), setRooms);
        }
    }

    return (
        <div>
            <Button size="large" onClick={handleOpen} variant="contained">Create Room</Button>
            <CModal showModal={open} handleClose={handleClose} handleChanges={handleCreateRoom}>
                <Typography variant="h5">
                    Create a new room
                </Typography>
                <TextField fullWidth id="roomName" label="Room name" variant="outlined" error={error}
                           inputRef={nameFieldRef} helperText={error ? "Room name can not be empty" : " "}
                           onChange={handleOnChange} margin="normal"/>
                <Divider/>
            </CModal>
        </div>
    );
}
