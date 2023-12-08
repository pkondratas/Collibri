import axios from 'axios';

export const fetchTags = async (postId, setTags) => {
    try {
        const response = await axios.get(`/v1/tags/on-post?postId=${postId}`)
        console.log(response.data);
        setTags(response.data);
    } catch (err) {
        console.log(err.message);
    }
}

export const getRoomTags = async (roomId, setTags) => {
    try {
        const response = await axios.get(`/v1/tags/?roomId=${roomId}`)
        console.log(response.data);
        setTags(response.data);
    } catch (err) {
        console.log(err.message);
    }
}

// export const fetchTags = (postId, setTags) => {
//     fetch(`/v1/tags/on-post?postId=${postId}`, { 
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//         }, 
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setTags(data);
//         })
//         .catch(error => console.error('Error fetching data', error));
// }

export const createTag = (tag) => {
    fetch(`/v1/tags`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: tag
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create tag');
            }
        })
        .then(() => {
            console.log('Tag created successfully.');
        })
        .catch(error => {
            console.error('Error creating tag:', error.message);
        });
}

export const deleteTag = (tagId) => {
    fetch(`/v1/tags?tagId=${tagId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete tag');
            }
        })
        .then(() => {
            console.log('Tag deleted successfully.');
        })
        .catch(error => {
            console.error('Error deleting tag:', error.message);
        });
}