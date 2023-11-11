import React, {useEffect, useState} from 'react';
import {Button, Paper, Table, TableRow, TableCell, TableBody, TableContainer} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {deleteSection, getSections, updateSection} from "../api/SectionApi";
import {useParams} from "react-router-dom";
import UpdateSectionModal from "./UpdateSectionModal";
import '../styles/tableList.css';
import {buttonStyle, nameCellStyle, tableRowStyle} from "../styles/tableListStyle";
import {deleteAllPostsInSection} from "../api/PostAPI";


const SectionsContainer = ({sections, setSections, setSectionId}) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [section, setSection] = useState({"Id": 0, "Name": "default"});
    const {roomId} = useParams()

    const handleOpenModal = (currentSection) => {
        setSection(currentSection);
        setUpdateModal(true);
    }
    
    const handleUpdateSection = (newName) => {
        section.sectionName = newName;
        updateSection(section.id, section, sections, setSections);
    }
    
    const handleDeleteSection = (row) => {
        deleteSection(row.id, setSections);
        setSectionId(0)
        deleteAllPostsInSection(row.id);
    }

    useEffect(() => {
        setSectionId(0);
    }, [roomId]);

    return (
        <>

            <TableContainer component={Paper} style={{minHeight: "30rem", maxHeight: "30rem", overflowY: "auto", }}>
                <Table stickyHeader sx={{minWidth: 400}} aria-label="simple table">
                    <TableBody>
                        {sections.map((row) => (
                            <TableRow
                                hover
                                className="TableRow"
                                key={row.id}
                                sx={tableRowStyle}
                            >
                                <TableCell sx={nameCellStyle} component="th" scope="row"
                                           onClick={() => setSectionId(row.id)}> {"#" + row.sectionName} </TableCell>
                                <TableCell align="right"><Button sx={buttonStyle} className="Button"
                                                                 startIcon={<DeleteIcon style={{fontSize: 30}}/>}
                                                                 onClick={() => handleDeleteSection(row)}></Button>
                                    <Button sx={buttonStyle} className="Button"
                                            startIcon={<EditIcon style={{fontSize: 30}}/>}
                                            onClick={() => {
                                                handleOpenModal(row)
                                            }
                                            }></Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <UpdateSectionModal section={section} sections={sections} updateModal={updateModal}
                                setUpdateModal={setUpdateModal} updateSection={handleUpdateSection}/>
        </>
    );
};

export default SectionsContainer;