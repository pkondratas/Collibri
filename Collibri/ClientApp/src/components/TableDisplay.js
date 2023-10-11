import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

const TableDisplay = ({ sections, handleDelete, handleUpdate }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow onClick >
                            <TableCell>Section Name</TableCell>
                            <TableCell align="right">room ID</TableCell>
                            <TableCell align="right">Section ID </TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sections.map((row) => (
                            <TableRow
                                key={row.sectionId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"> {row.sectionName} </TableCell>
                                <TableCell component="th" scope="row" align={"right"}> {row.roomId} </TableCell>
                                <TableCell align="right">{row.sectionId}</TableCell>
                                <TableCell align="right"><Button startIcon ={<DeleteIcon style={{ fontSize: 40 }} />}   onClick={() => handleDelete(row.sectionId)}></Button>
                                    <Button startIcon ={<EditIcon style=  {{ fontSize: 40 }} />}       onClick={() => handleUpdate(row.sectionId)}></Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableDisplay;