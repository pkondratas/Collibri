
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
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
    
    let page
    console.log(sections);
    if(sections.length > 0){
        page = <ul className="custom-list">
            {sections?.map((section, index) => (
                <li key={index}>
                    Section ID: {section.sectionId}, Room ID: {section.roomId}, Name: {section.sectionName}
                    {/*eilutes komponentas, priema Id stulpeli, roomId, ir name. Viskas i komponentus*/}
                </li>
            ))}
        </ul>
    }
    else{
        page = "loading";
    }
    return (page
    );
    
    
};

export default ListComponent;


