import { useEffect, useState } from "react";
import { productService } from "../services/product.services";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // productService.getAll().then(setProducts);
    setProducts(productService.getAll());
  }, []);

  return { products };
};

