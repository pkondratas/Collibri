import React from 'react';
import {Button,Paper,Table,TableRow,TableCell,TableBody,TableContainer} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/tableList.css';
import {buttonStyle, nameCellStyle, tableRowStyle} from "../styles/tableListStyle";

const SectionsContainer = ({sections, handleDelete, handleUpdate, handlePost, setSectionId}) => {
    return (
        <>

            <TableContainer component={Paper} style={{maxHeight: 300}}>
                <Table stickyHeader sx={{minWidth: 400}} aria-label="simple table">
                    <TableBody>
                        {sections.map((row) => (
                            <TableRow
                                hover
                                className="TableRow"
                                key={row.sectionId}
                                sx={tableRowStyle}
                            >
                                <TableCell sx={nameCellStyle} component="th" scope="row" onClick={() => setSectionId(row.sectionId)}> {"#" + row.sectionName} </TableCell>
                                <TableCell align="right"><Button sx={buttonStyle} className="Button" startIcon={<DeleteIcon style={{fontSize: 30}}/>}
                                                                 onClick={() => handleDelete(row.sectionId)}></Button>
                                    <Button sx={buttonStyle} className="Button" startIcon={<EditIcon style={{fontSize: 30}}/>}
                                            onClick={() => handleUpdate(row.sectionId)}></Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button className={"addSec"} onClick={() => handlePost()}>add Section</Button>

        </>
    );
};

export default SectionsContainer;