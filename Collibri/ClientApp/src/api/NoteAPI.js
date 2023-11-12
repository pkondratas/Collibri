import axios from 'axios';

export const fetchNotes = async (postId, setNotes) => {
  try {
    const response = await axios.get(`/v1/notes?postId=${postId}`)
    setNotes(response.data);
  } catch (err) {
    console.log(err.message);
  }
}

export const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(`/v1/notes/${noteId}`);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}
 