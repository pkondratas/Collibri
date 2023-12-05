import React from "react";
import {Button, Typography} from "@mui/material";
import {JoinCreateRoomStyles} from "../../styles/JoinCreateRoomStyles";


export const JoinRoom = () => {
    const handleJoinRoom = () => {
        // Implement join button
        alert("Work in progress");
    }

    return (
        <div>
            <Typography sx={JoinCreateRoomStyles.button} size="large" onClick={handleJoinRoom} variant="contained">Join Room</Typography>
        </div>
    );
}