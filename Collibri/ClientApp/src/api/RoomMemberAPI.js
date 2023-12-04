import axios from 'axios';

export const createMember = async (newMember, invitationCode) => {
  try {
    const response = await axios.post(`/v1/member?code=${invitationCode}`, newMember); 
    console.log(response.data);
    
    return response.data;
  } catch (err) {
    console.log(err);
    
    return err.response.status;
  }
}