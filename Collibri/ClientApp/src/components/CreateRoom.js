import React from "react";
import { createRoom } from "./RoomAPI";
import './LandingPage.css';

export const CreateRoom = () => {
    const handleCreateRoom = () => {
        const inputRoomName = prompt('Enter Room Name:');

        if (inputRoomName === null) {
            return;
        }

        createRoom(inputRoomName);
    };

    return (
        <div>
            <button className={"btn buttons"} onClick={handleCreateRoom}>Create Room</button>
        </div>
    );
}