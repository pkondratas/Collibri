import React from "react";
import { Button } from "@mui/material";

export const JoinRoom = () => {
    const handleJoinRoom = () => {
        // Implement join button
        alert("Work in progress");
    }

    return (
        <div>
            <Button size="large" onClick={handleJoinRoom} variant="contained">Join Room</Button>
        </div>
    );
}