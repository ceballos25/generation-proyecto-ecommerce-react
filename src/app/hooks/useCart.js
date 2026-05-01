import { useEffect, useState } from "react";

const STORAGE_KEY = "cart";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setCart(stored);
  }, []);

  const saveCart = (newCart) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart));
    setCart(newCart);
  };

  const add = (product) => {
    const existing = cart.find(i => i.id === product.id);

    let newCart;
    if (existing) {
      newCart = cart.map(i =>
        i.id === product.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    saveCart(newCart);
  };

  const remove = (id) => {
    saveCart(cart.filter(i => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    saveCart(
      cart.map(i =>
        i.id === id ? { ...i, quantity } : i
      )
    );
  };

  const clear = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCart([]);
  };

  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

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