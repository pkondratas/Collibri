import React from "react";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import './LandingPage.css';
import { Box } from "@mui/material";

export const LandingPageLayout = () => {
    return (
        <Box className={"main"}>
            <Box className={"room-page-header"}>
                Collibri
            </Box>
            <Box className={"list"}>
                {/*Room list here*/}
            </Box>
            <Box className={"create-button-area"}>
                <CreateRoom />
            </Box>
            <Box className={"join-button-area"}>
                <JoinRoom />
            </Box>
        </Box>
    );
}