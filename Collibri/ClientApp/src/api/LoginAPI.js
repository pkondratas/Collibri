import axios from "axios";

export const loginUser = async (loginData) => {
  const response = await axios.post('/v1/login', loginData);
  return response.data;
}