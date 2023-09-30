
import React, { useState, useEffect } from 'react';

const ListComponent = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7274/v1/sections?roomId=2')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the API response to the console
                setSections(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <ul className="custom-list">
            {sections.map((section, index) => (
                <li key={index}>
                    Section ID: {section.SectionId}, Room ID: {section.RoomId}, Name: {section.SectionName}
                </li>
            ))}
        </ul>
    );
};

export default ListComponent;


