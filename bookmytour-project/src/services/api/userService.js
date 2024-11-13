import apiClient from './config';

export const userService = {
    getAllUsers: async () => {
      return await apiClient.get('/usuarios');
    },
    
    getUserById: async (id) => {
      return await apiClient.get(`/usuarios/${id}`);
    },
    
    updateUser: async (id, userData) => {
      return await apiClient.put(`/usuarios/${id}`, userData);
    },
    
    deleteUser: async (id) => {
      return await apiClient.delete(`/usuarios/${id}`);
    }
  };