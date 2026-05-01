import { useEffect, useState } from "react";
import { productService } from "../services/product.services.js";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then(setProducts);
  }, []);

  return { products };
};