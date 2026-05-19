const STORAGE_KEY = 'cart';

export const cartService = {
  getCart() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },

  saveCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  },

  add(product) {
    const cart = this.getCart();
    const existing = cart.find((i) => i.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    this.saveCart(cart);
  },

  remove(id) {
    this.saveCart(this.getCart().filter((i) => i.id !== id));
  },

  updateQuantity(id, quantity) {
    const cart = this.getCart();
    const item = cart.find((i) => i.id === id);
    if (item) item.quantity = quantity;
    this.saveCart(cart);
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
