import axios from 'axios';
import { IClient } from '../Interfaces';

export const getClientById = async (clientId: number): Promise<IClient> => {
  try {
    const response = await axios.get(`http://localhost:3001/clients?id=${clientId}`);
    return response.data[0];
  } catch (error) {
    throw new Error('Error getting client by id');
  }
};