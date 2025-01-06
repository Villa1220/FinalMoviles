// services/authService.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/auth';

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
  return response.data;
};

export const registerUser = async (nombre: string, email: string, password: string, rol: string) => {
  const response = await axios.post(`${API_BASE_URL}/register`, { nombre, email, password, rol });
  return response.data;
};
