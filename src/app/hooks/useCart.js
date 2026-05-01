import { useEffect, useState } from "react";
import { cartService } from "../services/cartservices.js";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartService.getCart());
  }, []);

  const sync = () => setCart(cartService.getCart());

  const add = (product) => {
    cartService.add(product);
    sync();
  };

  const remove = (id) => {
    cartService.remove(id);
    sync();
  };

  const updateQuantity = (id, qty) => {
    cartService.updateQuantity(id, qty);
    sync();
  };

  const clear = () => {
    cartService.clear();
    sync();
  };

  const totalItems = cart.reduce((a, i) => a + i.quantity, 0);
  const totalPrice = cart.reduce((a, i) => a + i.price * i.quantity, 0);

  return {
    cart,
    add,
    remove,
    updateQuantity,
    clear,
    totalItems,
    totalPrice
  };
};