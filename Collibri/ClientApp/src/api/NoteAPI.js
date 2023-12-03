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

export const createNote = (note) => {
  fetch(`/v1/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: note
  })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create note');
        }
      })
      .then(() => {
        console.log('Note created successfully.');
      })
      .catch(error => {
        console.error('Error creating note:', error.message);
      });
}

export const deleteAllNotesInPost = (postId) => {
  fetch(`/v1/notes/in-post?postId=${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete all notes');
        }
      })
      .then(() => {
        console.log('All notes deleted successfully in post:', postId);
      })
      .catch(error => {
        console.error('Error deleting all notes:', error.message);
      });
}