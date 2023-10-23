import React from "react";
import { Button } from "@mui/material";
import { JoinCreateRoomStyles } from "../styles/JoinCreateRoomStyles";

export const JoinRoom = () => {
    const handleJoinRoom = () => {
        // Implement join button
        alert("Work in progress");
    }

    return (
        <div>
            <Button sx={JoinCreateRoomStyles.button} size="large" onClick={handleJoinRoom} variant="contained">Join Room</Button>
        </div>
    );
}