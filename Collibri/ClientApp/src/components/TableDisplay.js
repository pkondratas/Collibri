import React, {useEffect, useState} from 'react';
import {Button,Paper,Table,TableRow,TableCell,TableBody,TableContainer} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {deleteSection, getSections, updateSection} from "../api/SectionApi";
import {useParams} from "react-router-dom";
import UpdateSectionModal from "./UpdateSectionModal";


const TableDisplay = ({sections, setSections, setSectionId}) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [section, setSection] = useState({ "Id": 0, "Name": "default"});
    const {roomId} = useParams()
    const handleOpenModal = (currentSection) => {
         setSection(currentSection);
        setUpdateModal(true);
    }

    useEffect(() => {
        getSections(setSections, roomId);
    }, []);

    const handleUpdateSection = (newName) => {
        section.sectionName = newName;
        updateSection(section.sectionId, section, sections, setSections);
    }
   
   
   
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
                                    <Button startIcon={<EditIcon style={{fontSize: 30}}/>}
                                            onClick={() => {handleOpenModal(row)}
                                            }></Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <UpdateSectionModal section={section} sections={sections} updateModal={updateModal} setUpdateModal={setUpdateModal} updateSection={handleUpdateSection}/>
        </>
    );
};

export default TableDisplay;