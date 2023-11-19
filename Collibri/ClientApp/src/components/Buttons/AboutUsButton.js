import {Button} from "@mui/material";
import {JoinCreateRoomStyles} from "../../styles/JoinCreateRoomStyles";
import React from "react";
import {useNavigate} from "react-router-dom";



export const AboutUsButton = () => {

    const navigate = useNavigate();
    
    return (
       
            <Button sx={JoinCreateRoomStyles.button} size="large" onClick={() => navigate("/about")} variant="contained">About us</Button>
        
    );
}