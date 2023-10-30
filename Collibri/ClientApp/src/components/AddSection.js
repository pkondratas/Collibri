import {Button, Divider, TextField, Typography} from "@mui/material";
import CModal from "./CModal";
import React, {useRef, useState} from "react";
import {createSection} from "../api/SectionApi";
import {useParams} from "react-router-dom";

export const AddSection = ({setSections}) => {
    const nameFieldRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const {roomId} = useParams()


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

    function handleCreateSection() {
        if (nameFieldRef.current.value === null || nameFieldRef.current.value.trim() === '') {
            setError(true);
            return;
        } else {
            handleClose();
            createSection(nameFieldRef.current.value.trim(),roomId, setSections);
        }
    }
    
    return (
        <div>
            <Button size="large" onClick={handleOpen} variant="contained">Create Room</Button>
            <CModal showModal={open} handleClose={handleClose} handleChanges={handleCreateSection}>
                <Typography variant="h5">
                    Create a new Section
                </Typography>
                <TextField fullWidth id="roomName" label="Room name" variant="outlined" error={error}
                           inputRef={nameFieldRef} helperText={error ? "Section name can not be empty" : " "}
                           onChange={handleOnChange} margin="normal"/>
                <Divider/>
            </CModal>
        </div>
    );
}