import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const RoomList = ({selectedRow, setSelectedRow, rooms, handleDeleteRoom}) => {
    
    return (
        <div>
        <TableContainer component={Paper} style={{ maxHeight: 400 }}>
            <Table stickyHeader sx={{ minWidth:300 }} aria-label="simple table">
                <TableBody>
                    {rooms.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" onClick={() => setSelectedRow(row.id)}> {row.name} </TableCell>
                            
                            <TableCell align="center">
                                <Button onClick={() => handleDeleteRoom(row.id)} startIcon={<DeleteIcon style={{fontSize: 25}}/>}></Button>
                            </TableCell>
                            
                            <TableCell align="center">
                                <Button startIcon={<EditIcon style={{fontSize: 25}}/>}></Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <p>{selectedRow}</p>
        </div>
    );
}