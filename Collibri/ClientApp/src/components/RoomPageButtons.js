import React from "react";
import './LandingPage.css';

export const CreateRoom = () => {
    const handleCreateRoom = () => {
        const inputRoomName = prompt('Enter Room Name:');
        
        if (inputRoomName === null) {
            return;
        }

        fetch('/v1/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: inputRoomName,
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
            })
            .catch(error => {
                console.error('Error creating room:', error.message);
            });
    };

    return (
        <div>
            <button className={"btn buttons"} onClick={handleCreateRoom}>Create Room</button>
        </div>
    );
}

export const JoinRoom = () => {
    const handleJoinRoom = () => {
        // Implement Join button
    }
    
    return (
        <div>
            <button className={"btn buttons"} onClick={handleJoinRoom}>Join Room</button>
        </div>
    );
}