import React, {useEffect, useState} from 'react';
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateRoomModal from "./UpdateRoomModal";
import { useNavigate } from "react-router-dom";
import {deleteRoom, getRooms, updateRoom} from "../api/LandingPageApi";

export const RoomList = ({rooms, setRooms}) => {

    const [updateModal, setUpdateModal] = useState(false);
    const [room, setRoom] = useState({ "Id": 0, "Name": "default"});
    const navigate = useNavigate();
    
    const handleOpenModal = (currentRoom) => {
        setRoom(currentRoom);    
        setUpdateModal(true);
    }
    
    const updateRoomName = (newName) => {
        room.Name = newName;
        updateRoom(room.id, room, rooms, setRooms);
    }

    useEffect(() => {
            getRooms(setRooms)
        }, []
    );
    
    return (
        <Box>
        <TableContainer component={Paper} style={{ maxHeight: 400 }}>
            <Table stickyHeader sx={{ minWidth:300 }} aria-label="simple table">
                <TableBody>
                    {rooms.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" onClick={() => navigate(`/${row.id}`)}> {row.name} </TableCell>
                            
                            <TableCell align="center">
                                <Button onClick={() => deleteRoom(row.id, setRooms)} startIcon={<DeleteIcon style={{fontSize: 25}}/>}></Button>
                            </TableCell>
                            
                            <TableCell align="center">
                                <Button startIcon={<EditIcon style={{fontSize: 25}}/>}
                                    onClick={() => {handleOpenModal(row)}
                                }></Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            <UpdateRoomModal room={room} updateModal={updateModal} setUpdateModal={setUpdateModal} updateRoomName={updateRoomName}/>
        </Box>
    );
}