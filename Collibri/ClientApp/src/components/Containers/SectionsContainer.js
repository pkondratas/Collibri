import React, {useEffect, useState} from 'react';
import {Button, Paper, Table, TableRow, TableCell, TableBody, TableContainer} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useParams} from "react-router-dom";
import '../../styles/tableList.css';
import {deleteSection, updateSection} from "../../api/SectionApi";
import UpdateSectionModal from "../Modals/UpdateSectionModal";
import {buttonStyle, nameCellStyle, sectionCellStyle, tableRowStyle} from "../../styles/tableListStyle";
import {deleteAllPostsInSection} from "../../api/PostAPI";
import {useSelector} from "react-redux";

const SectionsContainer = ({sections, setSections, setSectionId}) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [section, setSection] = useState({"Id": 0, "Name": "default"});
    const currentRoom = useSelector((state) => state.rooms.currentRoom);
    const userInformation = useSelector((state) => state.user);

    const handleOpenModal = (currentSection) => {
        setSection(currentSection);
        setUpdateModal(true);
    }
    
    const handleUpdateSection = (newName) => {
        section.sectionName = newName;
        updateSection(section.id, section, sections, setSections);
    }
    
    const isOwner = () => {
        return userInformation.username === currentRoom.creatorUsername;
    }
    
    const handleDeleteSection = (row) => {
        deleteSection(row.id, setSections);
        setSectionId(0)
        deleteAllPostsInSection(row.id);
    }

    useEffect(() => {
        setSectionId(0);
    }, [currentRoom.id]);

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
                                    {isOwner() && (
                                      <TableCell align="right">
                                            <Button sx={buttonStyle} className="Button"
                                                    startIcon={<EditIcon style={{fontSize: 30}}/>}
                                                    onClick={() => {
                                                        handleOpenModal(row)
                                                    }}>
                                            </Button>
                                            <Button sx={buttonStyle} className="Button"
                                                    startIcon={<DeleteIcon style={{fontSize: 30}}/>}
                                                    onClick={() => handleDeleteSection(row)}>
                                            </Button>
                                      </TableCell>
                                    )}
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