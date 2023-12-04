import React, {useState} from "react";
import { Button } from "@mui/material";
import {JoinCreateRoomStyles} from "../../styles/JoinCreateRoomStyles";
import JoinRoomModal from "../Modals/JoinRoomModal";

export const JoinRoom = () => {
    const [joinModal, setJoinModal] = useState(false);
    
    const handleJoinRoom = () => {
        setJoinModal(true);
    }
    
    return (
      <>
          <Button sx={JoinCreateRoomStyles.button} size="large" onClick={() => handleJoinRoom()} variant="contained">Join Room</Button>
          <JoinRoomModal showModal={joinModal} setModal={setJoinModal} />
      </>
    );
}