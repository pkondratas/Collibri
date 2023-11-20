import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {deleteRoom, getRooms} from "../api/RoomAPI";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {nameCellStyle} from "../styles/tableListStyle";

export const SideRoomTable = () => {

    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getRooms(setRooms)
    }, []);


    return (
        <TableContainer component={Paper} style={{minHeight: "30rem", maxHeight: "30rem", overflowY: "auto", }}>
            <Table stickyHeader>
                <TableBody>
                    {rooms.map((row) => (
                        <TableRow
                            hover
                            className="TableRow"
                            key={row.id}
                            sx={nameCellStyle}
                        >
                            <TableCell component="th" scope="row"
                                       onClick={() => navigate(`/${row.id}`)}> {row.name} </TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}






