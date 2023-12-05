import axios from "axios";

export const deleteRoom = (roomId, setRooms) => {
    fetch(`/v1/rooms/${roomId}`, { method: "DELETE" })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            setRooms((prevRooms) => prevRooms.filter(room => room.id !== roomId));
        })
        .catch(error => console.error('Error deleting room:', error));
};

export const createRoom = (roomName, username, handleNewRoom) => {
    fetch('/v1/rooms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: roomName,
            CreatorUsername: username
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
            handleNewRoom(data);
        })
        .catch(error => {
            console.error('Error creating room:', error.message);
        });
}

export const updateRoom = (roomId, updatedRoom, rooms, setRooms) => {
    fetch(`/v1/rooms/${roomId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRoom)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const updatedRooms = [...rooms];
            const roomIndex = updatedRooms.findIndex(room => room.id === roomId);
            updatedRooms[roomIndex] = data;
            setRooms(updatedRooms);
        })
        .catch(error => console.error('Error updating section:', error));
};

export const getRooms = (username, setRoomsSlice) => {    
    fetch(`/v1/rooms?username=${username}`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setRoomsSlice(data);
        })
        .catch(error => console.error('Error fetching data', error));
}

export const getRoomByCode = async (code) => {
    try {
        const response = await axios.get(`/v1/rooms/${code}`)
        
        return response.data;
    } catch (err) {
        console.log(err);
        
        return err.response.status;
    }
}