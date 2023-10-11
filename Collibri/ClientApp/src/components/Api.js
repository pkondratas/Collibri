import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Api = () => {
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
    return { sections, handleDelete, handleUpdate };
};
export default Api;