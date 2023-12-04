// api.jsx

const API_BASE_URL = 'http://localhost:3001'; // Update this with your actual API base URL

const api = {
  getRestaurantData: async () => {
    const response = await fetch(`${API_BASE_URL}/restaurant`);
    return response.json();
  },

  getMenu: async () => {
    const response = await fetch(`${API_BASE_URL}/menu`);
    return response.json();
  },

  getReviews: async () => {
    const response = await fetch(`${API_BASE_URL}/reviews`);
    return response.json();
  },

  getEvents: async () => {
    const response = await fetch(`${API_BASE_URL}/events`);
    return response.json();
  },

  getSustainability: async () => {
    const response = await fetch(`${API_BASE_URL}/sustainability`);
    return response.json();
  },
};

export default api;
