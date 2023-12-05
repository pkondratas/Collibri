import React from 'react';
import CModal from "./CModal";
import { Typography } from "@mui/material";
import {deleteModalWarningStyle} from "../../styles/DeleteModalStyle";


const DeleteRoomModal = (props) => {
    const handleClose = () => props.setDeleteModal(false);
    
    const handleChanges = () => {
        // props.removeRoom(props.room.id);
        handleClose();
    };

    return(
        <>
            <CModal handleChanges={handleChanges} handleClose={handleClose} showModal={props.deleteModal} >
                <Typography variant="h5">
                    Are you sure you want to delete this room?
                </Typography>
                <Typography variant="h6">
                    {/*{props.room.name}*/}
                </Typography>
                <Typography variant="p" sx={deleteModalWarningStyle}>
                    Deleted rooms cannot be recovered.
                </Typography>
            </CModal>
        </>
    );
}

export default DeleteRoomModal;