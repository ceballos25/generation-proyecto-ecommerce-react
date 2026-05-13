import { api } from "./api.js";

export const userService = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(`/users/${id}`),
  getByEmail: (email) => api.get(`/users?email=${email}`),
  create: (user) => api.post('/users', user),
};