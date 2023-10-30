import React, {useEffect, useState} from 'react';
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateRoomModal from "./UpdateRoomModal";
import { useNavigate } from "react-router-dom";
import {deleteRoom, getRooms, updateRoom} from "../api/LandingPageApi";
import DeleteRoomModal from "./DeleteRoomModal";

export const RoomList = ({rooms, setRooms}) => {

    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [room, setRoom] = useState({ "Id": 0, "Name": "default"});
    const navigate = useNavigate();
    
    const handleOpenUpdateModal = (currentRoom) => {
        setRoom(currentRoom);    
        setUpdateModal(true);
    }
    
    const handleOpenDeleteModal = (currentRoom) => {
        setRoom(currentRoom);
        setDeleteModal(true)
    }
    const updateRoomName = (newName) => {
        room.Name = newName;
        updateRoom(room.id, room, rooms, setRooms);
    }
    
    const removeRoom = (roomId) => {
        deleteRoom(roomId, setRooms);
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
                            <TableCell component="th" scope="row" onClick={() => navigate(`/room/${row.id}`)}> {row.name} </TableCell>
                            
                            <TableCell align="center">
                                <Button onClick={() => {handleOpenDeleteModal(row)}} startIcon={<DeleteIcon style={{fontSize: 25}}/>}></Button>
                            </TableCell>
                            
                            <TableCell align="center">
                                <Button startIcon={<EditIcon style={{fontSize: 25}}/>}
                                    onClick={() => {handleOpenUpdateModal(row)}
                                }></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            <UpdateRoomModal room={room} updateModal={updateModal} setUpdateModal={setUpdateModal} updateRoomName={updateRoomName}/>
            <DeleteRoomModal room={room} deleteModal={deleteModal} setDeleteModal={setDeleteModal} removeRoom={removeRoom}/>
        </Box>
    );
}