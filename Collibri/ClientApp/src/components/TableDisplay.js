import React, {useEffect} from 'react';
import {Button,Paper,Table,TableRow,TableCell,TableBody,TableContainer} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {deleteSection, getSections} from "../api/SectionApi";
import {useParams} from "react-router-dom";


const TableDisplay = ({sections, setSections, setSectionId}) => {
    const {roomId} = useParams()

    useEffect(() => {
        getSections(setSections, roomId);
    }, []);
   
   
   
   
   
    return (
        <>

            <TableContainer component={Paper} style={{maxHeight: 300}}>
                <Table stickyHeader sx={{minWidth: 400}} aria-label="simple table">
                    <TableBody>
                        {sections.map((row) => (
                            <TableRow
                                key={row.sectionId}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row" onClick={() => setSectionId(row.sectionId)}> {"#" + row.sectionName} </TableCell>
                                <TableCell align="right"><Button startIcon={<DeleteIcon style={{fontSize: 30}}/>}
                                                                 onClick={() => deleteSection(row.sectionId, setSections)}></Button>
                                    {/*<Button startIcon={<EditIcon style={{fontSize: 30}}/>}*/}
                                    {/*        onClick={() => handleUpdate(row.sectionId)}></Button>*/}
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