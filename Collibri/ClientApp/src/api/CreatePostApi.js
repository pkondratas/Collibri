export const createPost = (post) => {
    
    fetch('/v1/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: post
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create post');
            }
            return response.json();
        })
        .then(data => {
            console.log('Post created successfully:', data);
        })
        .catch(error => {
            console.error('Error creating post:', error.message);
        });
}