import {Button, Divider, IconButton, TextField, Typography} from "@mui/material";
import CModal from "./CModal";
import React, {useRef, useState} from "react";
import {createSection} from "../api/SectionApi";
import {useParams} from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from "@mui/icons-material/Delete";
import {RoomLayoutStyles} from "../styles/RoomLayoutStyle";


export const AddSection = ({setSections, sections}) => {
    const nameFieldRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [isEmptyError, setIsEmptyError] = useState(false);
    const [isAlreadyUsedError, setIsAlreadyUsedError] = useState(false);

    const {roomId} = useParams()


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setIsEmptyError(false);
        setIsAlreadyUsedError(false);
    }

    const handleOnChange = () => {
        setIsEmptyError(false);
        setIsAlreadyUsedError(false);
    }

    function handleCreateSection() {

        if (nameFieldRef.current.value.trim() === '') {
            setIsEmptyError(true);
            return;
        } else if (sections.some(section => section.sectionName === nameFieldRef.current.value.trim())) {
            setIsAlreadyUsedError(true);
            return;
        } else {
            handleClose();
            createSection(nameFieldRef.current.value.trim(), roomId, setSections);
        }
    }

    return (
        <div>
            <IconButton sx={RoomLayoutStyles.addSettingsButtons} color="success" onClick={handleOpen}>
                <AddBoxIcon fontSize="large"/>
            </IconButton>
            <CModal showModal={open} handleClose={handleClose} handleChanges={handleCreateSection}>
                <Typography variant="h5">
                    Create a new Section
                </Typography>
                <TextField fullWidth id="sectionName" label="Section name" variant="outlined"
                           error={isEmptyError || isAlreadyUsedError}
                           inputRef={nameFieldRef}
                           helperText={
                               isEmptyError
                                   ? 'Section name cannot be empty'
                                   : isAlreadyUsedError
                                       ? 'Section name is already used'
                                       : ' '
                           }
                           onChange={handleOnChange} margin="normal"/>
                <Divider/>
            </CModal>
        </div>
    );
}