import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../services/authService';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  userName: string | null; // Agregar el nombre del cliente
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null); // Estado para el nombre del cliente

  const login = async (email: string, password: string) => {
    try {
      const data = await loginUser(email, password);
      if (data?.access_token) {
        setIsAuthenticated(true);
        setToken(data.access_token);
        setUserName(data.user.name); // Guardar el nombre del cliente
        await AsyncStorage.setItem('authToken', data.access_token);
        console.log('Usuario autenticado. Token:', data.access_token);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setToken(null);
    setUserName(null);
    await AsyncStorage.removeItem('authToken');
    console.log('Sesión cerrada. Token eliminado.');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe ser usado dentro de AuthProvider');
  return context;
};
