// api.js
import axios from 'axios';
import { Dish } from '../interfaces/Dish';
import { Order } from '../interfaces/Order';

const api = axios.create({
  baseURL: 'http://localhost:5048',
});

export const createOrder = async (orderData: Order) => {
  try {
    const response = await api.post('/api/v1/orders', orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await api.get('/api/v1/orders');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMenuItems = async (): Promise<Dish[]> => {
    try {
      const response = await api.get('/api/v1/dishes');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
