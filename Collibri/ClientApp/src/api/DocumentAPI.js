import axios from 'axios';

export const fetchDocuments = async (postId, setDocuments) => {
  try {
    const response = await axios.get(`/v1/documents/${postId}`);
    setDocuments(response.data);
  } catch (err) {
    console.log(err);
  }
}

export const deleteDocument = async (documentId) => {
  try {
    const response = await axios.delete(`/v1/documents/${documentId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}