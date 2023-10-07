import React, { useState} from 'react';

function BasicList(props){
    const [deleted, setDeleted] = useState(false);

    

    if (deleted) {
        return null;
    }
    
    return (
        <li>
            Name: {props.name}, Room ID: {props.roomId}, ID: {props.Id}
            <button onClick={() => DeleteSection(props.Id)}>Delete</button>
            <button onClick={() => UpdateSection(props.Id)}>Update</button>
        </li>
    );

   
}

function DeleteSection(id) {
    fetch(`/v1/sections?sectionId=` + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Additional headers if needed
        },
        // You can include a request body if required by your backend
        // body: JSON.stringify({}),
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend, e.g., update state or show a message
            alert(`Section with sectionId ${id} has been deleted.`);
        })
        .catch(error => {
            // Handle errors, e.g., show an error message to the user
            console.error('Error deleting section:', error);
        });
    
}

function UpdateSection(id) {
    
}

export  default  BasicList;