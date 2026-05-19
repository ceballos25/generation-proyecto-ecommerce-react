import { useEffect, useState } from 'react';
import { productService } from '../services/product.service.js';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productService.getAll());
  }, []);

  return { products };
};
