import { useEffect, useState } from "react";
import { productService } from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then(setProducts);
  }, []);

  return { products };
};