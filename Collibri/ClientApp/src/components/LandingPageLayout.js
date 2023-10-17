import React, {useEffect, useState} from "react";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import './LandingPage.css';
import { Box } from "@mui/material";
import {RoomList} from "./RoomList";

export const LandingPageLayout = () => {

    const [rooms, setRooms] = useState([]);
    
    return (
        <Box className={"main"}>
            <Box className={"room-page-header"}>
                Collibri
            </Box>
            <Box className={"list"}>
                <RoomList rooms={rooms} setRooms={setRooms}/>
            </Box>
            <Box className={"create-button-area"}>
                <CreateRoom setRooms={setRooms}/>
            </Box>
            <Box className={"join-button-area"}>
                <JoinRoom/>
            </Box>
        </Box>
    );
}