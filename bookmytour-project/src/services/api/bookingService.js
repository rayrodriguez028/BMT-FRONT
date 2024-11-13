import apiClient from './config';

export const bookingService = {
    getAllBookings: async () => {
      return await apiClient.get('/bookings');
    },
    
    createBooking: async (bookingData) => {
      return await apiClient.post('/bookings', bookingData);
    },
    
    getBookingById: async (id) => {
      return await apiClient.get(`/bookings/${id}`);
    },
    
    updateBooking: async (id, bookingData) => {
      return await apiClient.put(`/bookings/${id}`, bookingData);
    },
    
    deleteBooking: async (id) => {
      return await apiClient.delete(`/bookings/${id}`);
    }
  };