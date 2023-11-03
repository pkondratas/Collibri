export const createInitialPost = (sectionId, setPostId) => {
    
    fetch('/v1/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Title: "temp",
            Description: "temp",
            SectionId: sectionId
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create initial post');
            }
            return response.json();
        })
        .then(data => {
            console.log('Initial post created successfully:', data);
            setPostId(data.id);
        })
        .catch(error => {
            console.error('Error creating initial post:', error.message);
        });
}

export const updateInitialPost = (postId, updatedPost) => {

    fetch(`/v1/posts?postId=${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: updatedPost,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update initial post');
            }
            return response.json();
        })
        .then(data => {
            console.log('Initial post updated:', data);
        })
        .catch(error => {
            console.error('Error updating post:', error.message);
        });
}

export const deleteInitialPost = (postId) => {

    fetch(`/v1/posts?postId=${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete initial post');
            }
            return response.json();
        })
        .then(data => {
            console.log('Initial post deleted successfully:', data);
        })
        .catch(error => {
            console.error('Error deleting initial post:', error.message);
        });
}