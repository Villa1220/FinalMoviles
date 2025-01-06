import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/auth';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error en loginUser:', error.response?.data || error.message);
    throw error;
  }
};

export const registerUser = async (nombre: string, email: string, password: string, rol: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { nombre, email, password, rol });
    return response.data;
  } catch (error) {
    console.error('Error en registerUser:', error.response?.data || error.message);
    throw error;
  }
};
