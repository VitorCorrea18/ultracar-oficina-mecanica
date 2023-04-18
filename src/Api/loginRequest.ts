import axios from 'axios';

export const loginRequest = async (email: string, password: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/users?email=${email}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
