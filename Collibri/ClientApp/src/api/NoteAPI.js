import axios from 'axios';

export const createNote = async (note) => {
  try {
    const response = await axios.post('/v1/notes', JSON.parse(note), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Note created successfully.', response.data);
  } catch (error) {
    if (error.response && error.response.status === 409) {
      console.error('Error creating note: Note already exists.');
      throw new Error('Note already exists');
    } else {
      console.error('Error creating note:', error.message);
      throw new Error('Failed to create note');
    }
  }
};

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
 