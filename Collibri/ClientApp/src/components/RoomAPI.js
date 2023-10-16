export const createRoom = (roomName) => {
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
        })
        .catch(error => {
            console.error('Error creating room:', error.message);
        });
}