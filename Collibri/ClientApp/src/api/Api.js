import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Api = () => {
    const [sections, setSections] = useState([]);
    const {roomId} = useParams()

    useEffect(() => {
        // console.log("data")
        fetch('/v1/sections?roomId=' + roomId)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the API response to the console
                setSections(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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
    const handleUpdate = (id) => {

        const sectionToUpdate = sections.find(section => section.sectionId === id);
        if (sectionToUpdate) {
            const newName = window.prompt('Enter new name:');

            if (newName) {
                // Check if the newName is already used in the same room
                const isNameUsed = sections.some(section => section.sectionName === newName);

                if (isNameUsed) {
                    window.alert('Name already used in the same room. Please choose a different name.');
                } else {
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
    }

    const handlePost = () => {

        const newName = window.prompt('Enter new name:');
        if (!newName) {
            return window.alert("No name inputed");
        }


        // Prepare the data you want to send in the POST request
        const postData = {
            roomId: roomId, // Assuming roomId is defined elsewhere in your component
            sectionName: newName, // Replace this with the actual section name you want to send
        };

        fetch('/v1/sections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData), // Convert JavaScript object to JSON string
        })
            .then(response => {
                if (!response.ok) {
                    window.alert('Name already used in the same room. Please choose a different name.');
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setSections(prevSections => [...prevSections, data]);

            })
            .catch(error => {
                console.error('Error posting section:', error);
                // Display an error message to the user interface
            });
    };
    return {sections, handleDelete, handleUpdate, handlePost};
};
export default Api;