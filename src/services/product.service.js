import { api } from './api.js';
import { products as localProducts } from '../data/products.js';

export const productService = {
  // Usa datos locales mientras no haya backend disponible
  getAll: () => localProducts,
  // getAll: () => api.get('/products').then(data => data.map(p => ({ ...p, price: Number(p.price) || 0 }))),

  getById:      (id)      => api.get(`/products/${id}`),
  getByCategory:(cat)     => api.get(`/products?category=${cat}`),
  create:       (product) => api.post('/products', product),
  update:       (id, product) => api.put(`/products/${id}`, product),
  patch:        (id, data)    => api.patch(`/products/${id}`, data),
  delete:       (id)          => api.delete(`/products/${id}`),
};
