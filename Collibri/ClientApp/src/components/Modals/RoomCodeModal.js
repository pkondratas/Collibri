import React from 'react';
import { Typography } from "@mui/material";
import {deleteModalWarningStyle} from "../../styles/DeleteModalStyle";
import CModal from "./CModal";
import {useSelector} from "react-redux";

const RoomCodeModal = (props) => {
  const currentRoom = useSelector((state) => state.rooms.currentRoom);
  
  const handleClose = () => props.setInvModal(false);
  const handleChanges = () => {
    props.anchorClose(null);
    props.setInvModal(false);
  }

  return(
    <>
      <CModal handleChanges={handleChanges} handleClose={handleClose} showModal={props.invModal} >
        <Typography variant="h5">
          Invitation code for room "{currentRoom.name}"
        </Typography>
        <Typography variant="body1" sx={deleteModalWarningStyle}>
          {currentRoom.invitationCode}
        </Typography>
      </CModal>
    </>
  );
}

export default RoomCodeModal;