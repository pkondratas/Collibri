import axios from 'axios';

export const fetchNote = (noteId, setNote) => {
  axios.get(`/v1/notes/${noteId}`)
  .then(response => setNote(response.data))
}
 