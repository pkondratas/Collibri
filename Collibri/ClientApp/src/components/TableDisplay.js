import  React from 'react';
import {Button, Container} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";


const TableDisplay = ({ sections, handleDelete, handleUpdate, handlePost }) => {
    return (
        <>
            
            <TableContainer component={Paper} style={{ maxHeight: 300 }}>
                <Table stickyHeader sx={{ minWidth:400 }} aria-label="simple table">
                    <TableBody>
                        {sections.map((row) => (
                            <TableRow
                                key={row.sectionId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"> {"#" + row.sectionName} </TableCell>
                                <TableCell align="right"><Button startIcon ={<DeleteIcon style={{ fontSize: 30 }} />}   onClick={() => handleDelete(row.sectionId)}></Button>
                                    <Button startIcon ={<EditIcon style=  {{ fontSize: 30 }} />}       onClick={() => handleUpdate(row.sectionId)}></Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button  className={"addSec"} onClick={() => handlePost()}>add Section</Button>
            
        </>
    );
};

export default TableDisplay;