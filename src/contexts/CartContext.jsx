import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'cart';

export const CartProvider = ({ children }) => {
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
    const normalized = { ...product, price: Number(product.price) || 0 };
    const existing = cart.find((item) => item.id === product.id);

    const newCart = existing
      ? cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...cart, { ...normalized, quantity: 1 }];

    saveCart(newCart);
  };

  const remove = (id) => {
    saveCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    saveCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const clear = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCart([]);
  };

  const getTotalItems = () =>
    cart.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);

  const getTotalPrice = () =>
    cart.reduce((acc, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 0;
      return acc + price * qty;
    }, 0);

  return (
    <CartContext.Provider
      value={{ cart, add, remove, updateQuantity, clear, getTotalItems, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
