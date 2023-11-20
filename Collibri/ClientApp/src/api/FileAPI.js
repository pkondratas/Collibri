import axios from 'axios';

export const getAllFiles = (postId, setFiles) => {
    return axios.get()
        .then(response => setFiles(response.data))
        .catch(error => console.log(error.message))
}