import axios from 'axios';

export const fetchFiles = async (postId, setFiles) => {
    try {
        const response = await axios.get(`/v1/files/info/${postId}`)
        setFiles(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFile = async (id) => {
    const response = await fetch(`/v1/files/data/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'blob'
    });
    if (!response.ok) {
        throw new Error("Failed to get file data");
    }

    return await response.blob();
}