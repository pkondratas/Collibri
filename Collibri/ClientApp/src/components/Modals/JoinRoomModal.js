import React, {useRef, useState} from 'react';
import {TextField, Typography} from "@mui/material";
import {deleteModalWarningStyle} from "../../styles/DeleteModalStyle";
import CModal from "./CModal";
import {modalTextField} from "../../styles/UpdatePostModalStyle";
import {useSelector} from "react-redux";
import {createMember} from "../../api/RoomMemberAPI";

const JoinRoomModal = (props) => {
  const textFieldRef = useRef(null);
  const [error, setError] = useState(false);
  const [invalidRoomError, setInvalidRoomError] = useState(false);
  const rooms = useSelector((state) => state.rooms.rooms);
  const userInformation = useSelector((state) => state.user);
  
  const handleClose = () => props.setModal(false);
  
  const handleChanges = async () => {
    const invitationCodes = rooms.map(x => x.invitationCode);
    
    if (invitationCodes.includes(textFieldRef.current.value)) {
      setError(true);
      setInvalidRoomError(false);
    } else {
      const data = await createMember( { username: userInformation.username }, textFieldRef.current.value); //gali mest null del missing field
    }
    
    handleClose();
  };

  return(
    <>
      <CModal handleChanges={handleChanges} handleClose={handleClose} showModal={props.showModal} >
        <Typography variant="h5">
          Enter the invitation code
        </Typography>
        <TextField
          error={error}
          inputRef={textFieldRef}
          size='small'
          label='Name'
          helperText={error ? (invalidRoomError ? "Room doesn't exist" : "You've already joined this room!" ) : ' '}
          sx={modalTextField}
        />
      </CModal>
    </>
  );
}

export default JoinRoomModal;