import React, {useEffect, useState} from 'react';
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import {deleteRoom, getRooms, updateRoom} from "../../api/RoomAPI";
import {
    buttonStyle,
    deleteButtonStyle,
    nameCellStyle,
    SectionsContainerStyles,
    tableRowStyle
} from "../../styles/tableListStyle";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentRoom, setRoomsSlice, updateRoomsSlice} from "../../state/user/roomsSlice";
import LeaveRoomModal from "../Modals/LeaveRoomModal";

export const RoomContainer = () => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [room, setRoom] = useState({ id: 0, name: "", creatorUsername: "", invitationCode: 0 });
    const userLogInInformation = useSelector((state) => state.user);
    const rooms = useSelector((state) => state.rooms);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const setRoomsSliceFunc = (fetchedData) => {
        dispatch(setRoomsSlice(fetchedData));
    }
    
    const handleOpenDeleteModal = (currentRoom) => {
        dispatch(setCurrentRoom(currentRoom));
        setRoom(currentRoom);
        setDeleteModal(true);
    }

    useEffect(() => {
            getRooms(userLogInInformation.username, setRoomsSliceFunc);
        }, []
    );
    
    return (
        <Box>
        <TableContainer component={Paper} style={{minHeight: "15rem", maxHeight: "15rem", overflowY: "auto", }}>
            <Table stickyHeader sx={{ minWidth:300 }} aria-label="simple table">
                <TableBody>
                    {rooms.rooms.map((row) => (
                        <TableRow
                            hover
                            className="TableRow"
                            key={row.id}
                            sx={SectionsContainerStyles.tableBody}
                            onClick={() => {
                                dispatch(setCurrentRoom(row));
                                navigate(`/${row.id}`)
                            }}
                        >
                            <TableCell sx={nameCellStyle} component="th" scope="row"> 
                                {row.name} 
                            </TableCell>
                            
                            <TableCell align="center">
                                <Button sx={deleteButtonStyle} className="Button" onClick={(event) => {
                                    event.stopPropagation();
                                    handleOpenDeleteModal(row)
                                }} startIcon={<DeleteIcon style={{fontSize: 25}}/>}
                                >
                                    
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            <LeaveRoomModal name={room.name} deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
        </Box>
    );
}