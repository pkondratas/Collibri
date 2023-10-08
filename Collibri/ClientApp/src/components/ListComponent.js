
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import BasicList from "./BasicList";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ListComponent = () => {
    const [sections, setSections] = useState([]);
    const {roomId} = useParams()
    
    useEffect(() => {
        
        fetch('/v1/sections?roomId='+roomId)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the API response to the console
                setSections(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [roomId]);
    const handleDelete = id => {
        fetch(`/v1/sections?sectionId=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the response from the DELETE request
                setSections(prevSections => prevSections.filter(section => section.sectionId !== id));
            })
            .catch(error => console.error('Error deleting section:', error));
    };
    const handleUpdate = (id) =>{
        
        const sectionToUpdate = sections.find(section => section.sectionId === id);
        if(sectionToUpdate) {
            const newName = window.prompt('Enter new name:');
            if(newName){
                sectionToUpdate.sectionName = newName;
                const updatedSections = [...sections];
                const sectionIndex = updatedSections.findIndex(section => section.sectionId === id);
                updatedSections[sectionIndex] = sectionToUpdate;
                setSections(updatedSections);
            }

           
           
            
        fetch(`/v1/sections?sectionId=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sectionToUpdate), // Updated section data
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the response from the PUT request
                // Store the updated section data in state if needed
            })
            .catch(error => console.error('Error updating section:', error));
            
        }
        
    }
    
    
    if (sections.length > 0) {
        console.log(sections);
        return (
            <>
            
            <ul>
                
                {sections.map((section => <BasicList key = {section.sectionId}
                                                     name = {section.sectionName}
                                                     roomId = {section.roomId} 
                                                     Id = {section.sectionId} 
                                                     onDelete={handleDelete}
                                                     onUpdate={handleUpdate}
                />))}
            </ul>
                
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

    )

    }
    return "No sections Present fam";
    
};

export default ListComponent;


