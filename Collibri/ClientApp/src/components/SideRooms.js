import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {deleteRoom, getRooms} from "../api/LandingPageApi";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const SideRoomTable = () => {

    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getRooms(setRooms)
    }, []);
    
    return (<TableContainer component={Paper} style={{maxHeight: 700, maxWidth: 110}}>
            <Table stickyHeader>
                <TableBody>
                    {rooms.map((row) => (
                        <TableRow
                            key={row.Id}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                onClick={() => navigate(`/${row.id}`)}> {row.name}
                            </TableCell>
                        </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>);
}