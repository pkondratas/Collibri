import {useEffect, useState} from "react";

export const LandingPageApi = () => {
    const [selectedRow, setSelectedRow] = useState(0);
    const [rooms, setRooms] = useState([]);
    const handleDeleteRoom = (roomId) => {
        fetch(`/v1/rooms/${roomId}`, { method: "DELETE" })
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
                setRooms((prevRooms) => prevRooms.filter(room => room.id !== roomId));
            })
            .catch(error => console.error('Error deleting room:', error));
    };

    const createRoom = (roomName) => {
        fetch('/v1/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: roomName,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to create room');
                }
                return response.json();
            })
            .then(data => {
                console.log('Room created successfully:', data);
                setRooms((prevRooms) => [...prevRooms, data]);
            })
            .catch(error => {
                console.error('Error creating room:', error.message);
            });
    }

    useEffect(() => {
            fetch('/v1/rooms', { method: "GET" })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setRooms(data);
                })
                .catch(error => console.error('Error fetching data', error));
        }, []
    );
    
    return {rooms, handleDeleteRoom, createRoom, selectedRow, setSelectedRow};
}