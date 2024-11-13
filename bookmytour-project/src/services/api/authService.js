import apiClient from './config';

export const authService = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  
  register: async (userData) => {
    return await apiClient.post('/auth/register', userData);
  },
  
  logout: () => {
    localStorage.removeItem('token');
  }
};