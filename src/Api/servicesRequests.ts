import axios from 'axios';
import { IService } from '../Interfaces';

export const getServicesByUserId = async (userId: number): Promise<IService[]> => {
  try {
    const response = await axios.get(`http://localhost:3001/services?userID=${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error getting services by user id');
  }
};
