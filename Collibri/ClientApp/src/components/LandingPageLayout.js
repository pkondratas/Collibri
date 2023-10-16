import React from "react";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import './LandingPage.css';
import { Box } from "@mui/material";
import {LandingPageApi} from "../apis/LandingPageApi";
import {RoomList} from "./RoomList";

export const LandingPageLayout = () => {

    const {rooms, handleDeleteRoom, createRoom, selectedRow, setSelectedRow} = LandingPageApi();
    
    return (
        <Box className={"main"}>
            <Box className={"room-page-header"}>
                Collibri
            </Box>
            <Box className={"list"}>
                <RoomList selectedRow={selectedRow} setSelectedRow={setSelectedRow} rooms={rooms} handleDeleteRoom={handleDeleteRoom}/>
            </Box>
            <Box className={"create-button-area"}>
                <CreateRoom createRoom={createRoom}/>
            </Box>
            <Box className={"join-button-area"}>
                <JoinRoom/>
            </Box>
        </Box>
    );
}