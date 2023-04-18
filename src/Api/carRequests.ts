import axios from 'axios';
import { ICar } from '../Interfaces';

export const getCarByServiceId = async (serviceId: number): Promise<ICar> => {
  try {
    const response = await axios.get(`http://localhost:3001/cars?serviceId=${serviceId}`);
    const car = response.data[0]; // assuming there is only one car associated with the serviceId
    return car;
  } catch (error) {
    console.error(`Error fetching car with serviceId ${serviceId}: ${error}`);
    throw new Error('Error fetching car with serviceId');
  }
};
