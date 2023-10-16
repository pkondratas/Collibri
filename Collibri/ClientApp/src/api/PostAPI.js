import axios from 'axios';

export const fetchPosts = (sectionId, setPosts) => {
  axios.get(`/v1/posts?sectionId=${sectionId}`)
    .then(response => setPosts(response.data))
    .catch(error => {
      console.log(error.message);
    })
}

export const deletePost = (postId) => {
  return axios.delete(`/v1/posts?postId=${postId}`)
    .then(response => {
      if(response.data) {
        return response.data;
      } else {
        throw new Error("Unsuccessful request to delete.");
      }
    })
}

export const updatePost = (postId, postToUpdate) => {
  axios.put(`/v1/posts?postId=${postId}`, postToUpdate)
    .then()
    .catch(error => console.error('Error updating post: ', error))
}
