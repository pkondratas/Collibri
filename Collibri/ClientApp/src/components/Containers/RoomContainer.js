import React, {useEffect, useState} from 'react';
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import {deleteRoom, getRooms, updateRoom} from "../../api/RoomAPI";
import UpdateRoomModal from "../Modals/UpdateRoomModal";
import DeleteRoomModal from "../Modals/DeleteRoomModal";
import {buttonStyle, nameCellStyle, tableRowStyle} from "../../styles/tableListStyle";
import '../../styles/tableList.css';
import Skeleton from '@mui/material/Skeleton';

export const RoomContainer = ({rooms, setRooms}) => {

    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [room, setRoom] = useState({ "Id": 0, "Name": "default"});
    const [skeleton, setSkeleton] = useState(true);
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
            getRooms(setRooms,setSkeleton)
        }, []
    );
    
    return (
        <Box>
        <TableContainer component={Paper} style={{minHeight: "15rem", maxHeight: "25rem", overflowY: "auto", }}>
            <Table stickyHeader sx={{ minWidth:300 }} aria-label="simple table">
                <TableBody>
                    {rooms.map((row) => (
                        <TableRow
                            hover
                            className="TableRow"
                            key={row.id}
                            sx={tableRowStyle}
                        >
                            <TableCell sx={nameCellStyle} component="th" scope="row" onClick={() => navigate(`/${row.id}`)}> {row.name} </TableCell>
                            
                            <TableCell align="center">
                                <Button sx={buttonStyle} className="Button" onClick={() => {handleOpenDeleteModal(row)}} startIcon={<DeleteIcon style={{fontSize: 25}}/>}></Button>
                            </TableCell>
                            
                            <TableCell align="center">
                                <Button sx={buttonStyle} className="Button" startIcon={<EditIcon style={{fontSize: 25}}/>}
                                    onClick={() => {handleOpenUpdateModal(row)}
                                }></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            { skeleton ? <Skeleton animation="wave" variant="rectangular" height="25rem" /> : ''}
        </TableContainer>
            <UpdateRoomModal room={room} updateModal={updateModal} setUpdateModal={setUpdateModal} updateRoomName={updateRoomName}/>
            <DeleteRoomModal room={room} deleteModal={deleteModal} setDeleteModal={setDeleteModal} removeRoom={removeRoom}/>
        </Box>
    
    );
}