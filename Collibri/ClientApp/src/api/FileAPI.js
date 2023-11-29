import axios from 'axios';

export const fetchFiles = async (postId, setFiles) => {
    try {
        const response = await axios.get(`/v1/files/info/${postId}`)
        setFiles(response.data);
    } catch (error) {
        console.log(error.message);
    }
}