import { api } from './api.js';
import { Product } from '../models/Product.js';

export const productService = {
  async getAll() {
    const data = await api.get('/products');
    return data.map(p => new Product(p));
  },

  async getById(id) {
    const data = await api.get(`/products/${id}`);
    return new Product(data);
  },

  create: (product) => api.post('/products', product),
  update: (id, product) => api.put(`/products/${id}`, product),
  delete: (id) => api.delete(`/products/${id}`)
};