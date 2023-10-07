
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import BasicList from "./BasicList";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';

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

    if (sections.length > 0) {
        console.log(sections);
        return (
            <ul>


                {sections.map((section => <BasicList key = {section.sectionId}
                                                     name = {section.sectionName}
                                                     roomId = {section.roomId} 
                                                     Id = {section.sectionId}
                />))}
                
                
          
                
            </ul>
            
            
            
        )

    }
    return "empty";


};

export default ListComponent;


